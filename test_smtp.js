var express = require('express'),
	  port = 25;

var app = express();

app.get('/', function (req, res) {
	res.send(200, 'all good');
});

app.listen(port, function() {
    console.log('Listening on port %d', port);
});