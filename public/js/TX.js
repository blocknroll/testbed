var socket = io();

// TOP ROW ///////////////////////////////////////////////////////////////
$('#turnLeft').click(function () {
  socket.emit('turnLeft');
});

$('#forward').click(function () {
  socket.emit('forward');
});

$('#turnRight').click(function () {
  socket.emit('turnRight');
});


// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').click(function () {
  socket.emit('spinLeft');
});

$('#stop').click(function () {
  socket.emit('stop');
});

$('#spinRight').click(function () {
  socket.emit('spinRight');
});


// BOTTOM ROW ///////////////////////////////////////////////////////////
$('#reverseLeft').click(function () {
  socket.emit('reverseLeft');
});

$('#reverse').click(function () {
  socket.emit('reverse');
});

$('#reverseRight').click(function () {
  socket.emit('reverseRight');
});
