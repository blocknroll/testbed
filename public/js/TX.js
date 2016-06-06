var socket = io();
// const fs      = require('fs');
// const fileLocation = '/sys/bus/w1/devices/28-0000060416e5/w1_slave';


// TEMPERATURE SENSOR DS18B20 SETUP ///////////////////////////////////////////

// function airTempMotorController() {
//
//     setTimeout(function () {
//
//       fs.readFile(fileLocation, 'utf8', function (err,data) {
//         if (err) throw err;
//         matches = data.match(/t=([0-9]+)/);
//         var temperatureC = parseInt(matches[1]) / 1000;
//         var temperatureF = ((temperatureC * 1.8) + 32).toFixed(3);
//         output = '{ "temperature": { "celcius": '+ temperatureC +', "fahrenheit": '+ temperatureF +' } }';
//         console.log('Your current temperature is ' + temperatureF + ' degrees F.');
//         setTimeout(airTempMotorController, 1000);
//
//         if (temperatureF < 73.999) {
//           console.log('temp < 74. Motor off.');
//           socket.emit('TX-stop');
//         }
//         if (temperatureF > 74) {
//           console.log('temp > 74. Motor on!');
//           socket.emit('TX-forward');
//         }
//       });
//
//     }, 2000);
//   }
//   airTempMotorController();



// TOP ROW ///////////////////////////////////////////////////////////////

$('#turnLeft').bind('touchstart mousedown', function () {
  socket.emit('TX-turnLeft');
});
$('#turnLeft').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});

$('#forward').bind('touchstart mousedown', function () {
  socket.emit('TX-forward');
});
$('#forward').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});

$('#turnRight').bind('touchstart mousedown', function () {
  socket.emit('TX-turnRight');
});
$('#turnRight').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});


// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').bind('touchstart mousedown', function () {
  socket.emit('TX-spinLeft');
});
$('#spinLeft').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});

$('#spinRight').bind('touchstart mousedown', function () {
  socket.emit('TX-spinRight');
});
$('#spinRight').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});


// BOTTOM ROW ///////////////////////////////////////////////////////////
$('#reverseLeft').bind('touchstart mousedown', function () {
  socket.emit('TX-reverseLeft');
});
$('#reverseLeft').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});

$('#reverse').bind('touchstart mousedown', function () {
  socket.emit('TX-reverse');
});
$('#reverse').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});

$('#reverseRight').bind('touchstart mousedown', function () {
  socket.emit('TX-reverseRight');
});
$('#reverseRight').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});
