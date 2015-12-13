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
  socket.on('turnLeft', function () {
    turnLeft(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('turnLeft');
  });

  socket.on('forward', function () {
    forward(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('forward');
  });

  socket.on('turnRight', function () {
    turnRight(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('turnRight');
  });


  // MIDDLE ROW ////////////////////////////////////
  socket.on('spinLeft', function () {
    spinLeft(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('spinLeft');
  });

  socket.on('stop', function () {
    stop();
    io.emit('RxOff');
    ledRxOff();
    console.log('stop');
  });

  socket.on('spinRight', function () {
    spinRight(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('spinRight');
  });


  // BOTTOM ROW ////////////////////////////////////
  socket.on('reverseLeft', function () {
    reverseLeft(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('reverseLeft');
  });

  socket.on('reverse', function () {
    reverse(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('reverse');
  });

  socket.on('reverseRight', function () {
    reverseRight(255);
    io.emit('RxOn');
    ledRxOn();
    console.log('reverseRight');
  });

});




// LED FUNCTIONS – EVENT HANDLERS ///////////////////////////////////////////
var ledRxOn = function () {
  ledRx.on();
}

var ledRxOff = function () {
  ledRx.off();
}





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
