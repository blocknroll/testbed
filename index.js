const http    = require('http');
const express = require('express');
const app     = express();
const server  = http.createServer(app);
const io      = require('socket.io')(server);
const five    = require('johnny-five');
const board   = new five.Board();
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


  // TOP ROW ////////////////////////////////////
  socket.on('TX-turnLeft', function () {
    turnLeft(255);
    io.emit('RX-turnLeft');
    ledRxOn();
    console.log('RX-turnLeft');
  });

  socket.on('TX-forward', function () {
    forward(255);
    io.emit('RX-forward');
    ledRxOn();
    console.log('RX-forward');
  });

  socket.on('TX-turnRight', function () {
    turnRight(255);
    io.emit('RX-turnRight');
    ledRxOn();
    console.log('RX-turnRight');
  });


  // MIDDLE ROW ////////////////////////////////////
  socket.on('TX-spinLeft', function () {
    spinLeft(255);
    io.emit('RX-spinLeft');
    ledRxOn();
    console.log('RX-spinLeft');
  });

  socket.on('TX-stop', function () {
    stop();
    io.emit('RX-stop');
    ledRxOff();
    console.log('RX-stop');
  });

  socket.on('TX-spinRight', function () {
    spinRight(255);
    io.emit('RX-spinRight');
    ledRxOn();
    console.log('RX-spinRight');
  });


  // BOTTOM ROW ////////////////////////////////////
  socket.on('TX-reverseLeft', function () {
    reverseLeft(255);
    io.emit('RX-reverseLeft');
    ledRxOn();
    console.log('RX-reverseLeft');
  });

  socket.on('TX-reverse', function () {
    reverse(255);
    io.emit('RX-reverse');
    ledRxOn();
    console.log('RX-reverse');
  });

  socket.on('TX-reverseRight', function () {
    reverseRight(255);
    io.emit('RX-reverseRight');
    ledRxOn();
    console.log('RX-reverseRight');
  });

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
}

var ledRxOff = function () {
  ledRx.off();
}
