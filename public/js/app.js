var socket = io();
var NowMoment = moment();

console.log(NowMoment);
socket.on('connect', function () {
	console.log('Connected to socket.io server');
});

socket.on('message', function (message) {
	var momentTimeStamp = moment.utc(message.timeStamp);
	jQuery('.messages').append('<p><strong>'+ momentTimeStamp.local().format('h:mm a') +': </strong>'+ message.text + '</p>');
});

// Handles sumitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function (event){
	event.preventDefault();

	var $message = $form.find('input[name=message]')
	
	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
})