var express = require('express');
var router = express.Router();
var utils = require('../utils.js');





/* GET METHODS */


router.get('/', function(req, res) {
  res.render('index', {
  	title: "Home - Legacy of Hope",
  	thumb_img: "thumb_home.png",
  	description: "The Legacy of Hope Foundation is dedicated to increasing awareness and support for Nelson Mandela’s Legacy of Hope.",
  	stylesheet: "home.css"
  });
});

router.get('/board', function(req, res) {
  res.render('board', {
  	title: "Board of Directors - Legacy of Hope",
  	thumb_img: "thumb_board.png",
  	description: "The Legacy of Hope board of Directors.",
  	stylesheet: "board.css"
  });
});

router.get('/concert', function(req, res) {
  res.render('concert', {
  	title: "Concert - Legacy of Hope",
  	thumb_img: "thumb_concerts.png",
  	description: "This historic 4-6 hour concert event will feature a minimum of 10 national artists on stage and will be simulcast worldwide. This event plans to be more collaborative than any concert has ever been before.",
  	stylesheet: "concert.css"
  });
});

router.get('/guitarinitiative', function(req, res) {
  res.render('guitarinitiative', {
  	title: "The Guitar Initiative - Legacy of Hope",
  	thumb_img: "thumb_guitarinitiative.png",
  	description: "The Guitar Initiative is a campaign to increase awareness and support for Nelson Mandela’s Legacy of Hope, through the medium of music. The Initiative has two main goals: to obtain musician and celebrity endorsements, and to produce ongoing recordings by artists to benefit the Children’s Hospital and its young patients.",
  	stylesheet: "guitarinitiative.css"
  });
});

router.get('/mission', function(req, res) {
  res.render('mission', {
  	title: "Our Mission - Legacy of Hope",
  	thumb_img: "thumb_mission.png",
  	description: "The partnering of The Nelson Mandela Children's Hospital Trust and The Legacy of Hope Foundation was expressly formed to aid in the creation and awareness of The Nelson Mandela Children's Hospital.",
  	stylesheet: "mission.css"
  });
});








router.use('/sponsors', utils.basicAuth('sponsor', 'lohc1049'));
router.get('/sponsors', function(req, res) {
  res.render('sponsors', {
  	title: "Sponsors - Legacy of Hope",
  	thumb_img: "thumb_mission.png",
  	description: "The partnering of The Nelson Mandela Children's Hospital Trust and The Legacy of Hope Foundation was expressly formed to aid in the creation and awareness of The Nelson Mandela Children's Hospital.",
  	stylesheet: "sponsors.css"
  });
});


//make error page
router.get('*', function(req, res) {
  res.render('sponsors', {
    title: "Sponsors - Legacy of Hope",
    thumb_img: "thumb_mission.png",
    description: "The partnering of The Nelson Mandela Children's Hospital Trust and The Legacy of Hope Foundation was expressly formed to aid in the creation and awareness of The Nelson Mandela Children's Hospital.",
    stylesheet: "sponsors.css"
  });
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






module.exports = router;
