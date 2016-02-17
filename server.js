var express = require('express');
var app = express();
var http = require('http').Server(app);
var morgan = require('morgan');

var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development';


app.use(express.static(__dirname + '/public'));

if (ENV === 'development') {
	app.use(morgan('common'));
}


http.listen(PORT, function () {
	console.log('Express listening on PORT ' + PORT + '!');
});