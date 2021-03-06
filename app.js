var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var debug = require('debug')('legacyofhopeconcerts');
var fs = require('fs');



var routes = require('./routes/routes');

var app = express();

var env = process.env.NODE_ENV || 'development';



var oneDay = 86400000;  // cache-control


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/static/favicon.ico'));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'static'), { maxAge: oneDay }));




app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (env === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




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




app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});



module.exports = app;
