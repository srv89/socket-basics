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

io.on('connection', function (socket) {
	console.log('User connected via socket.io!');

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);

		io.emit('message', message);
	});


	socket.emit('message', {
		text: 'Welcome to the chat application!'
	});
});



http.listen(PORT, function () {
	console.log('Express listening on PORT ' + PORT + '!');
});