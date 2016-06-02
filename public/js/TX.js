var socket = io();

// TOP ROW ///////////////////////////////////////////////////////////////

$('#turnLeft').bind('touchstart mousedown', function () {
  socket.emit('TX-turnLeft')
});
$('#turnLeft').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});

$('#forward').bind('touchstart mousedown', function () {
  socket.emit('TX-forward');
});
$('#forward').bind('touchend mouseup', function () {
  socket.emit('TX-stop');
});

$('#turnRight').bind('touchstart mousedown', function () {
  socket.emit('TX-turnRight')
});
$('#turnRight').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});


// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').bind('touchstart mousedown', function () {
  socket.emit('TX-spinLeft')
});
$('#spinLeft').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});

$('#spinRight').bind('touchstart mousedown', function () {
  socket.emit('TX-spinRight')
});
$('#spinRight').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});


// BOTTOM ROW ///////////////////////////////////////////////////////////
$('#reverseLeft').bind('touchstart mousedown', function () {
  socket.emit('TX-reverseLeft')
});
$('#reverseLeft').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});

$('#reverse').bind('touchstart mousedown', function () {
  socket.emit('TX-reverse')
});
$('#reverse').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});

$('#reverseRight').bind('touchstart mousedown', function () {
  socket.emit('TX-reverseRight')
});
$('#reverseRight').bind('touchend mouseup', function () {
  socket.emit('TX-stop')
});
