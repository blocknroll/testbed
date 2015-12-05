const http    = require('http');
const express = require('express');
const app     = express();
const server  = http.createServer(app);
const io      = require('socket.io')(server);



// SERVER /////////////////////////////////////////////////////////////////////

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function () {
  console.log('listening on localhost:3000');
});



// SOCKETS ////////////////////////////////////////////////////////////////////

io.on('connection', function (socket) {

  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });

  socket.on('stop', function () {
    // stop();
    console.log('stop');
  });

});
