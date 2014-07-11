var express = require('express'),
		nodemailer = require('nodemailer'),
		env = process.env.NODE_ENV || 'development',
		port = process.env.PORT || 3000;

var app = express();
var local = false;
var auth = express.basicAuth('sponsor', 'lohc1049');

app.set('basepath', '/index.html');
app.use(express.bodyParser());



if ('development' === env) {
	console.log('development');
  	// Authenticator
	//app.use(express.basicAuth('testuser', 'lohc889'));

	process.argv.forEach(function (val, index, array) {
	  if (val=='local')
	  	local=true;
	});
}
else if ('production' === env ) {
	console.log('production');
    var newrelic = require('newrelic');
}

// app.get('/contact', function (req, res) {
// 	res.json({test:'test'});
// });

app.post('/contact', function (req, res) {
	console.log('contact emailer');
	var mailOpts, smtpTrans;
	var data = req.body;
	
	smtpTrans = nodemailer.createTransport('sendmail', {
		path: "/usr/sbin/sendmail",
		args: ["-t", "eggast@legacyofhopeconcerts.org"]
	});

	//console.log('sending data: ' + JSON.stringify(data));
	var text = 'name: ' + data['name'] + '\nemail: ' + data['email'] + '\nMessage: ' + data['message'];
	if (data['sponsor']==='true') {
		text += '\n\nSponsorship Interest: YES' + '\nCompany Name: ' + data['company'] + '\nPhone: ' + data['phone'] + '\nReferrer: ' + data['referrer'] + '\nInterest: ' + data['interest'];
	}
	
	
	//Mail options
	mailOpts = {
			from: req.body.name + ' <' + req.body.email + '>', //grab form data from the request body object
			to: 'eggast@legacyofhopeconcerts.org, jtrubenbach@gmail.com, mrhoades@bespinholdings.com',
			subject: 'Website contact form',
			text: text
	};

	smtpTrans.sendMail(mailOpts, function (error, responseStatus) {
			console.log('sendmail');
			if(error) {
				console.log("error: " + error);
				res.json({ error : error });
			}
			else {
				console.log('response message: ' + responseStatus.message); // response from the server
        		console.log('response messageID: ' + responseStatus.messageId); // Message-ID value used
				res.json({ status : 'sent' });
			}
			
	});
});

if ('production' === env ) {
    app.get('/sponsors', auth, function (req, res) {
		res.sendfile(__dirname + '/static/sponsors.html');
	});
}

app.use(express.static(__dirname + '/static'));

app.listen(port, function() {
    console.log('Listening on port %d, local: %s', port, local);
});
