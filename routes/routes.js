var express = require('express');
var request = require('request');
var router = express.Router();
var utils = require('../utils.js');
var cmsgateway = require('./cmsgateway.js');

var authUser = true;
var env = process.env.NODE_ENV || 'development';


// router.get('*', function(req, res, next) {
//   authUser = utils.isAuth(req,res, 'sponsor', 'lohc1049');
//   next();
// });

/* GET METHODS */

router.get('/:year/:month/:day/:article', function(req, res) {

  switch (req.params.year){
    case '2014':
    switch (req.params.month){

      case '6':
      switch (req.params.day){
        case '30':
        switch (req.params.article){
          case 'GraçaMachel':
          cmsgateway.getPageData('cms', 'graca', function(err, data) {data.authUser = authUser;res.render('graca', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;

        
        default:
        res.redirect('/');
        break;
      }
      break;


      case '9':
      switch (req.params.day){
        case '13':
        switch (req.params.article){
          case 'botlhale':
          cmsgateway.getPageData('cms', 'botlhale', function(err, data) {data.authUser = authUser;res.render('botlhale', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;

        case '20':
        switch (req.params.article){
          case 'TataVega':
          cmsgateway.getPageData('cms', 'tata', function(err, data) {data.authUser = authUser; res.render('tata', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;

        case '27':
        switch (req.params.article){
          case 'RubyBridges':
          cmsgateway.getPageData('cms', 'ruby', function(err, data) {data.authUser = authUser;res.render('ruby', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;
        default:
        res.redirect('/');
        break;
      }
      break;


      case '10':
      switch(req.params.day){
        case '4':
        switch(req.params.article){
          case 'ArunGandhi':
          cmsgateway.getPageData('cms', 'arun', function(err, data) {data.authUser = authUser;res.render('arun', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;

        case '5':
        switch(req.params.article){
          case 'SamSolimanLOHAmbassador':
          cmsgateway.getPageData('cms', 'soliman', function(err, data) {data.authUser = authUser;res.render('soliman', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;


        case '11':
        switch(req.params.article){
          case 'ChuckNice':
          cmsgateway.getPageData('cms', 'chuck', function(err, data) {data.authUser = authUser;res.render('chuck', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;


        case '25':
        switch(req.params.article){
          case 'LarryKing':
          cmsgateway.getPageData('cms', 'larry', function(err, data) {data.authUser = authUser;res.render('larry', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;




        default:
        res.redirect('/');
        break;
      }
      break;

      case '11':
      switch(req.params.day){
        case '6':
        switch(req.params.article){
          case 'OctaviaSpencer':
          cmsgateway.getPageData('cms', 'octavia', function(err, data) {data.authUser = authUser;res.render('octavia', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;


         case '11':
         switch(req.params.article){
          case 'PressRelease':
          cmsgateway.getPageData('cms', 'pr1', function(err, data) {data.authUser = authUser;res.render('pr1', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;

        case '13':
         switch(req.params.article){
          case 'BotlhaleBoikanyo':
          cmsgateway.getPageData('cms', 'botlhale2', function(err, data) {data.authUser = authUser;res.render('botlhale2', data);});
          break;
          default:
          res.redirect('/');
          break;
        }
        break;


        default:
        res.redirect('/');
        break;
      }
      break;



      default:
      res.redirect('/');
      break;
    }
    break;
    default:
    res.redirect('/');
    break;
  }

});




router.get('/', function(req, res) {
  cmsgateway.getPageData('cms', 'home', 
    function(err, data) {
      data.authUser = authUser;
      res.render('home', data);
    });
});

router.get('/mission', function(req, res) {
  res.redirect('/about');
});
router.get('/hospital', function(req, res) {
  res.redirect('/about');
});
router.get('/about', function(req, res) {
  cmsgateway.getPageData('cms', 'about', 
    function(err, data) {
      data.authUser = authUser;
      res.render('mission2', data);
    });
});


router.get('/app', function(req, res) {
  cmsgateway.getPageData('cms', 'app', 
    function(err, data) {
      data.authUser = authUser;
      res.render('app', data);
    });
});

router.get('/board', function(req, res) {
  cmsgateway.getPageData('cms', 'board', 
    function(err, data) {
      data.authUser = authUser;
      res.render('board', data);
    });
});




router.get('/concert', function(req, res) {
  cmsgateway.getPageData('cms', 'concert', 
    function(err, data) {
      data.authUser = authUser;
      res.render('concert2', data);
    });
});

// router.get('/concert4', function(req, res) {
//   cmsgateway.getPageData('cms', 'concert4', 
//     function(err, data) {
//       data.authUser = authUser;
//       res.render('concert4', data);
//     });
// });

router.get('/donate', function(req, res) {
  cmsgateway.getPageData('cms', 'donate3', 
    function(err, data) {
      data.authUser = authUser;
      res.render('donate3', data);
    });
});


router.get('/guitarinitiative', function(req, res) {
  cmsgateway.getPageData('cms', 'guitarinitiative', 
    function(err, data) {
      data.authUser = authUser;
      res.render('guitarinitiative', data);
    });
});

// router.get('/hospital', function(req, res) {
//   cmsgateway.getPageData('cms', 'hospital', 
//     function(err, data) {
//       data.authUser = authUser;
//       res.render('hospital', data);
//     });
// });



router.get('/aol/legacy-of-hope-nmcht-concert.html', function(req, res) {
  res.redirect('/legacy-of-hope-nmcht-concert');
});


router.get('/legacy-of-hope-nmcht-concert', function(req, res) {
  cmsgateway.getPageData('cms', 'legacy-of-hope-nmcht-concert', 
    function(err, data) {
      data.authUser = authUser;
      res.render('legacy-of-hope-nmcht-concert', data);
    });
});


router.get('/LOHsponsors', function(req, res) {
  cmsgateway.getPageData('cms', 'LOHsponsors', 
    function(err, data) {
      data.authUser = authUser;
      res.render('LOHsponsors', data);
    });
});


router.get('/mandeladay', function(req, res) {
  cmsgateway.getPageData('cms', 'mandeladay', 
    function(err, data) {
      data.authUser = authUser;
      res.render('mandeladay', data);
    });
});

// router.get('/mission', function(req, res) {
//   cmsgateway.getPageData('cms', 'mission', 
//     function(err, data) {
//       data.authUser = authUser;
//       res.render('mission', data);
//     });
// });


router.get('/press', function(req, res) {
  res.redirect('/news');
});
router.get('/news', function(req, res) {
  cmsgateway.getPageData('cms', 'news', 
    function(err, data) {
      data.authUser = authUser;
      res.render('news', data);
    });
});

router.get('/partners', function(req, res) {
  cmsgateway.getPageData('cms', 'partners', 
    function(err, data) {
      data.authUser = authUser;
      res.render('partners', data);
    });
});


// router.get('/press', function(req, res) {
//   cmsgateway.getPageData('cms', 'press', 
//     function(err, data) {
//       data.authUser = authUser;
//       res.render('press', data);
//     });
// });

router.get('/paymentconfirmed', function(req, res) {
  cmsgateway.getPageData('cms', 'paymentconfirmed', 
    function(err, data) {
      data.authUser = authUser;
      res.render('paymentconfirmed', data);
    });
});



router.use('/sponsors', utils.basicAuth('sponsor', 'lohc1049'));
router.get('/sponsors', function(req, res) {
  // authUser = true; 
  cmsgateway.getPageData('cms', 'sponsors', 
    function(err, data) {
      data.authUser = authUser;
      res.render('sponsors', data);
    });
});


router.get('/videoplayer', function(req, res) {

  cmsgateway.getPageData('cms', 'videoplayer', 
      function(err, data) {
        data.authUser = authUser;
        data.endpoint = "no url";
        res.render('videoplayer', data);
      });
});

// robots
if (env === 'development') {
  router.use(function (req, res, next) {
    if ('/robots.txt' == req.url) {
        res.type('text/plain')
        res.send("User-agent: *\nDisallow: /");
    } else {
        next();
    }
});

  }


router.get('/videoplayer', function(req, res) {

  cmsgateway.getPageData('cms', 'videoplayer', 
      function(err, data) {
        data.authUser = authUser;
        data.endpoint = "no url";
        res.render('videoplayer', data);
      });
});





// robots

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  router.get('/robots.txt', function(req, res) {
      res.type('text/plain')
      res.send("User-agent: *\nDisallow: /");
});
};


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






// router.get('/videoplayer', function(req, res) {
//   var url = "no url";
//   var options = {
//     uri: 'https://ipms-dev.appspot.com/ipms/events/LOH20141203/urls/hds',
//     method: 'POST',
//     json: {
//       'Angle': 1, 
//       'GiftCode': '' 
//     }
//   };

//   request(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//      url=body;
//      cmsgateway.getPageData('cms', 'videoplayer', 
//       function(err, data) {
//         data.authUser = authUser;
//         data.endpoint = url;
//         res.render('videoplayer', data);
//       });
//    }
//  });
// });



router.post('/video', function(req, res){
 var angle = req.body.Angle;
 var giftcode = req.body.GiftCode;
 var url = 'https://ipms-dev.appspot.com/ipms/events/LOH20141203/streams/' + angle + "/hds";
 if(giftcode!=""){
  url = url + "?giftcode=" + giftcode;
 }else if (angle==2){
  res.send("Error -- need a gift code");
 }
  var options = {
    uri: url,
    method: 'GET',
  };

   request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
     res.send(body);
   }else{
    console.log("Status code: " + response.statusCode + "/nError: " +error);
   }
 });
});



 module.exports = router;
