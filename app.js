var express = require('express'),
		nodemailer = require('nodemailer'),
		env = process.env.NODE_ENV || 'development',
		port = process.env.PORT || 3000;

var app = express();
var local = false;

app.set('basepath', '/index.html');
app.use(express.bodyParser());



if ('development' === env) {
  	// Authenticator
	app.use(express.basicAuth('testuser', 'lohc889'));

	process.argv.forEach(function (val, index, array) {
	  if (val=='local')
	  	local=true;
	});
}
else if ('production' === env ) {
    var newrelic = require('newrelic');
}

app.post('/contact', function (req, res) {
	console.log('contact emailer');
	var mailOpts, smtpTrans;
	var data = req.body;
	
	smtpTrans = nodemailer.createTransport('sendmail', {
		path: "/usr/sbin/sendmail",
		args: ["-t", "eggast@legacyofhopeconcerts.org"]
	});

	console.log('sending data: ' + JSON.stringify(data));
	var text = 'name: ' + data['name'] + '\nemail: ' + data['email'] + '\nMessage: ' + data['message'];
	if (data['sponsor']==='true') {
		text += '\n\nSponsorship Interest: YES' + '\nCompany Name: ' + data['company'] + '\nPhone: ' + data['phone'] + '\nInterest: ' + data['interest']
	}
	
	
	//Mail options
	mailOpts = {
			from: req.body.name + ' <' + req.body.email + '>', //grab form data from the request body object
			to: 'eggast@legacyofhopeconcerts.org',
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

app.use(express.static(__dirname + '/static'));

app.listen(port, function() {
    console.log('Listening on port %d, local: %s', port, local);
});
