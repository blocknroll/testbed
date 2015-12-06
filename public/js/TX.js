var socket = io();


// TOP ROW ///////////////////////////////////////////////////////////////
$('#turnLeft').mousedown(function () {
  socket.emit('turnLeft')
});
$('#turnLeft').mouseup(function () {
  socket.emit('stop')
});

$('#forward').mousedown(function () {
  socket.emit('forward')
});
$('#forward').mouseup(function () {
  socket.emit('stop')
});

$('#turnRight').mousedown(function () {
  socket.emit('turnRight')
});
$('#turnRight').mouseup(function () {
  socket.emit('stop')
});


// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').mousedown(function () {
  socket.emit('spinLeft')
});
$('#spinLeft').mouseup(function () {
  socket.emit('stop')
});

$('#stop').mousedown(function () {
  socket.emit('stop')
});
$('#stop').mouseup(function () {
  socket.emit('stop')
});

$('#spinRight').mousedown(function () {
  socket.emit('spinRight')
});
$('#spinRight').mouseup(function () {
  socket.emit('stop')
});


// BOTTOM ROW ///////////////////////////////////////////////////////////
$('#reverseLeft').mousedown(function () {
  socket.emit('reverseLeft')
});
$('#reverseLeft').mouseup(function () {
  socket.emit('stop')
});

$('#reverse').mousedown(function () {
  socket.emit('reverse')
});
$('#reverse').mouseup(function () {
  socket.emit('stop')
});

$('#reverseRight').mousedown(function () {
  socket.emit('reverseRight')
});
$('#reverseRight').mouseup(function () {
  socket.emit('stop')
});
