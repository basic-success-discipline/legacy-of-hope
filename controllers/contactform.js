var flatiron = require('flatiron'),
    app = flatiron.app,
    _ = require ("underscore"),
    sendmail = require('sendmail')();

var contactFormGet = function () {
    var res = this.res;
    res.redirect('contactform.html');
};

var contactFormSend = function () {
    var data = this.req.body;
    var req = this.req, res = this.res;

// server-side validation disabled until the require errors are figured out
//    var Validator = Validator.Validator,
//        Assert = Validator.Assert
//
//        constraint = {
//            name:      [ new Assert().NotBlank(), new Assert().Length( { min: 4, max: 25 } ) ],
//            email:     new Assert().Email()
//        };
//
//    if(Validator.validate( data, constraint )) {
        sendmail({
            from: 'sschepis@gmail.com ',
            to: 'sschepis@gmail.com ',
            subject: 'test sendmail',
            content: JSON.stringify(data)
        }, function(err, reply) {
            res.writeHead(200, { 'content-type': 'application/json' });

            if(err) res.json({ error : err });
            else res.json({ result : reply });
        });
//    }
//    else this.res.json({ result : object });
};

exports.init = function () {
    app.router.get('/contact', contactFormGet);
    app.router.post('/sendcf', contactFormSend);
};
