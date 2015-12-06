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
});



// SOCKETS ////////////////////////////////////////////////////////////////////

io.on('connection', function (socket) {

  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });

  socket.on('stop', function () {
    stop();
    console.log('stop');
  });

  socket.on('forward', function () {
    forward();
    console.log('forward');
  });

});



// MOTOR FUNCTIONS ////////////////////////////////////////////////////////////

var stop = function () {
  motors.left.stop();
  motors.right.stop();
};

var forward = function (speed) {
  motors.left.forward(speed);
  motors.right.reverse(speed);
};
