var express = require('express');
var morgan = require('morgan');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development';


app.use(express.static(__dirname + '/public'));


if (ENV === 'development') {
	app.use(morgan('common'));
}

var clientInfo = {};

io.on('connection', function (socket) {
	console.log('User connected via socket.io!');

	socket.on('joinRoom', function (req) {
		clientInfo[socket.id] = req;
		socket.join(req.room);
		socket.broadcast.to(req.room).emit('message', {
			name: 'System',
			text: req.name + ' has joined!', 
			timestamp: moment().valueOf()
		})
	});

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);
		message.timestamp = moment.valueOf();
		io.to(clientInfo[socket.id].room).emit('message', message);

	});


	socket.emit('message', {
		name: 'System',
		text: 'Welcome to the chat application!',
		timestamp: moment.valueOf()
	});
});



http.listen(PORT, function () {
	console.log('Express listening on PORT ' + PORT + '!');
});