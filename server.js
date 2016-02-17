var PORT = process.env.PORT || 3000;
var express = require('express');
var http = require('http').Server(app);
var app = express();

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
	console.log('Express listening on PORT ' + PORT + '!');
})