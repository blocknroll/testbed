const http    = require('http');
const express = require('express');
const app     = express();
const server  = http.createServer(app);
const io      = require('socket.io')(server);
const five    = require('johnny-five');
const board   = new five.Board();
const airTemp = require('./server/airTemp-2.js')(io);
// const airTemp = require('./public/js/airTemp-2.js')(io);


// const fs      = require('fs');
// const fileLocation = '/sys/bus/w1/devices/28-0000060416e5/w1_slave';
motors        = {};



// SERVER /////////////////////////////////////////////////////////////////////

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(5000, function () {
  console.log('listening on localhost:5000');
});



// JOHNNY-FIVE BOARD SETUP ////////////////////////////////////////////////////

board.on('ready', function () {

  motors = {
    left: new five.Motor({
      pins: {
        pwm: 3,
        dir: 12
      },
      invertPWM: true
    }),
    right: new five.Motor({
      pins: {
        pwm: 5,
        dir: 8
      },
      invertPWM: true
    })
  };

  ledRx = new five.Led(13);

});








// SOCKETS ////////////////////////////////////////////////////////////////////

io.on('connection', function (socket) {

  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });




  socket.on('temp < 74. Motor off.', function () {
    stop();
    // io.emit('RX-off');
    // io.emit('RX-stop');
    ledRxOff();
    console.log('RX-temp < 74. Motor off.');
  });

  socket.on('Motor-on', function () {
    forward(255);
    // io.emit('RX-on');
    // io.emit('RX-forward');
    ledRxOn();
    console.log('RX-temp > 74. Motor should be on!');
  });




  // TOP ROW ////////////////////////////////////
  socket.on('TX-turnLeft', function () {
    turnLeft(255);
    io.emit('RX-on');
    io.emit('RX-turnLeft');
    ledRxOn();
    console.log('RX-turnLeft');
  });

  socket.on('TX-forward', function () {
    forward(255);
    io.emit('RX-on');
    io.emit('RX-forward');
    ledRxOn();
    console.log('RX-forward');
  });

  socket.on('TX-turnRight', function () {
    turnRight(255);
    io.emit('RX-on');
    io.emit('RX-turnRight');
    ledRxOn();
    console.log('RX-turnRight');
  });


  // MIDDLE ROW ////////////////////////////////////
  socket.on('TX-spinLeft', function () {
    spinLeft(255);
    io.emit('RX-on');
    io.emit('RX-spinLeft');
    ledRxOn();
    console.log('RX-spinLeft');
  });

  socket.on('TX-stop', function () {
    stop();
    io.emit('RX-off');
    io.emit('RX-stop');
    ledRxOff();
    console.log('RX-stop');
  });

  socket.on('TX-spinRight', function () {
    spinRight(255);
    io.emit('RX-on');
    io.emit('RX-spinRight');
    ledRxOn();
    console.log('RX-spinRight');
  });


  // BOTTOM ROW ////////////////////////////////////
  socket.on('TX-reverseLeft', function () {
    reverseLeft(255);
    io.emit('RX-on');
    io.emit('RX-reverseLeft');
    ledRxOn();
    console.log('RX-reverseLeft');
  });

  socket.on('TX-reverse', function () {
    reverse(255);
    io.emit('RX-on');
    io.emit('RX-reverse');
    ledRxOn();
    console.log('RX-reverse');
  });

  socket.on('TX-reverseRight', function () {
    reverseRight(255);
    io.emit('RX-on');
    io.emit('RX-reverseRight');
    ledRxOn();
    console.log('RX-reverseRight');
  });




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

});









// MOTOR FUNCTIONS – EVENT HANDLERS ///////////////////////////////////////////

// TOP ROW ////////////////////////////////////
var turnLeft = function (speed) {
  motors.left.forward(speed * 0.5);
  motors.right.reverse(speed);
};

var forward = function (speed) {
  motors.left.forward(speed);
  motors.right.reverse(speed - 21);
};

var turnRight = function (speed) {
  motors.left.forward(speed);
  motors.right.reverse(speed * 0.5);
};


// MIDDLE ROW ////////////////////////////////////
var spinLeft = function (speed) {
  motors.left.reverse(speed);
  motors.right.reverse(speed);
};

var stop = function () {
  motors.left.stop();
  motors.right.stop();
};

var spinRight = function (speed) {
  motors.left.forward(speed);
  motors.right.forward(speed);
};


// BOTTOM ROW ////////////////////////////////////
var reverseLeft = function (speed) {
  motors.left.reverse(speed * 0.5);
  motors.right.forward(speed);
};

var reverse = function (speed) {
  motors.left.reverse(speed);
  motors.right.forward(speed - 21);
};

var reverseRight = function (speed) {
  motors.left.reverse(speed);
  motors.right.forward(speed * 0.5);
};




// LED FUNCTIONS – EVENT HANDLERS ///////////////////////////////////////////
var ledRxOn = function () {
  ledRx.on();
};

var ledRxOff = function () {
  ledRx.off();
};


module.exports = server;
