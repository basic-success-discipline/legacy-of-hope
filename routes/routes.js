var express = require('express');
var request = require('request');
var router = express.Router();
var utils = require('../utils.js');
var cmsgateway = require('./cmsgateway.js');



/* GET METHODS */


router.get('/', function(req, res) {
  cmsgateway.getPageData('cms', 'home', 
    function(err, data) {
      res.render('home', data);
    });
});

router.get('/board', function(req, res) {
  cmsgateway.getPageData('cms', 'board', 
    function(err, data) {
      res.render('board', data);
    });
});


router.get('/concert', function(req, res) {
  cmsgateway.getPageData('cms', 'concert', 
    function(err, data) {
      res.render('concert2', data);
    });
});

router.get('/guitarinitiative', function(req, res) {
  cmsgateway.getPageData('cms', 'guitarinitiative', 
    function(err, data) {
      res.render('guitarinitiative', data);
    });
});



router.get('/aol/legacy-of-hope-nmcht-concert.html', function(req, res) {
  res.redirect('/legacy-of-hope-nmcht-concert');
});


router.get('/legacy-of-hope-nmcht-concert', function(req, res) {
  cmsgateway.getPageData('cms', 'legacy-of-hope-nmcht-concert', 
    function(err, data) {
      res.render('legacy-of-hope-nmcht-concert', data);
    });
});


router.get('/mandeladay', function(req, res) {
  cmsgateway.getPageData('cms', 'mandeladay', 
    function(err, data) {
      res.render('mandeladay', data);
    });
});

router.get('/mission', function(req, res) {
  cmsgateway.getPageData('cms', 'mission', 
    function(err, data) {
      res.render('mission', data);
    });
});

router.get('/hospital', function(req, res) {
  cmsgateway.getPageData('cms', 'hospital', 
    function(err, data) {
      res.render('hospital', data);
    });
});



router.use('/sponsors', utils.basicAuth('sponsor', 'lohc1049'));
router.get('/sponsors', function(req, res) {
cmsgateway.getPageData('cms', 'sponsors', 
    function(err, data) {
      res.render('sponsors', data);
    });
});



//make error page
router.get('*', function(req, res) {
  res.redirect('/');
});







// POST METHODS

router.post('/contact', function (req, res) {

    console.log('contact emailer');

    var nodemailer = require('nodemailer');   //uses an old version -- can this be upgraded?
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
            to: 'eggast@legacyofhopeconcerts.org, jtrubenbach@gmail.com',
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

/**
 * register proxy endpoint. Routes registrations to back-end server
 */
router.post('/register', function(req, res) {
  var registerUrl = 'http://ec2-54-191-42-61.us-west-2.compute.amazonaws.com/auth/register';
  var formValues = {
    username    : req.body.email,
    password    : req.body.email,
    email       : req.body.email,
    autoconfirm : 1
  }
  request.post(registerUrl,  { form : formValues },
    function(err, data) {
      if(err) res.json(err);
      else {
        console.log(JSON.stringify(data, null, 4));
        res.json(data);
      }
    });
});




module.exports = router;
