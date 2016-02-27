var moment = require('moment');

//var now = moment()

/*console.log(now.format('MMMM Do YYYY, h:mm:ss a'));
console.log(now.format('MMM Do YYYY, h:mma'));

console.log(now.format('X'));
console.log(now.format('x'));*/

var timeStamp = moment().valueOf();
console.log(timeStamp);
var timeStampMoment = moment.utc(timeStamp);
var localTime = timeStampMoment.local()
console.log(localTime.format());

/*var timeStamp = 1456522732489;
var timeStampMoment = moment.utc(timeStamp);
//var localTime = timeStampMoment.local()

console.log(timeStampMoment.local().format('h:mm a'));*/