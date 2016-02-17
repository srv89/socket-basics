var express = require('express');
var morgan = require('morgan');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development';


app.use(express.static(__dirname + '/public'));

if (ENV === 'development') {
	app.use(morgan('common'));
}

io.on('connection', function () {
	console.log('User connected via socket.io!');
});

http.listen(PORT, function () {
	console.log('Express listening on PORT ' + PORT + '!');
});