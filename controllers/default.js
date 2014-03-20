var flatiron = require('flatiron'),
    app = flatiron.app,
    moment = require("moment"),
    fs = require('fs'),
    path = require('path'),
    url = require('url');


var indexGet = function () {
    this.res.redirect('/index.html');
};

var serveContent = function(request, response, header) {
    var uri = url.parse(this.req.url).pathname;
    var filename = path.join(__dirname, 'static', uri);
    console.log("filename: " + filename);
    console.log("header: " + header);
    this.res.setHeader('content-type', header);
    var fileStream = fs.createReadStream(filename);
    fileStream.pipe(response);
};

exports.init = function () {
  app.router.get('/', indexGet);
  app.router.get('/videos/home.mp4', function() { serveWithCustomContentType(this.req, this.res, 'video/mp4'); });
  app.router.get('(ogg)', function() { serveWithCustomContentType(this.req, this.res, 'video/ogg'); });
  app.router.get('(webm)', function() { serveWithCustomContentType(this.req, this.res, 'video/webm'); });
};
