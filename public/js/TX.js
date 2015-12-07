var socket = io();


// TOP ROW ///////////////////////////////////////////////////////////////
$('#turnLeft').bind('touchstart mousedown', function () {
  socket.emit('turnLeft')
});
$('#turnLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
});

$('#forward').bind('touchstart mousedown', function () {
  socket.emit('forward')
});
$('#forward').bind('touchend mouseup', function () {
  socket.emit('stop')
});

$('#turnRight').bind('touchstart mousedown', function () {
  socket.emit('turnRight')
});
$('#turnRight').bind('touchend mouseup', function () {
  socket.emit('stop')
});


// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').bind('touchstart mousedown', function () {
  socket.emit('spinLeft')
});
$('#spinLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
});

$('#spinRight').bind('touchstart mousedown', function () {
  socket.emit('spinRight')
});
$('#spinRight').bind('touchend mouseup', function () {
  socket.emit('stop')
});


// BOTTOM ROW ///////////////////////////////////////////////////////////
$('#reverseLeft').bind('touchstart mousedown', function () {
  socket.emit('reverseLeft')
});
$('#reverseLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
});

$('#reverse').bind('touchstart mousedown', function () {
  socket.emit('reverse')
});
$('#reverse').bind('touchend mouseup', function () {
  socket.emit('stop')
});

$('#reverseRight').bind('touchstart mousedown', function () {
  socket.emit('reverseRight')
});
$('#reverseRight').bind('touchend mouseup', function () {
  socket.emit('stop')
});
