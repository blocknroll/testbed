var socket = io();


// TOP ROW ///////////////////////////////////////////////////////////////
$('#turnLeft').bind('touchstart mousedown', function () {
  socket.emit('turnLeft')
});
$('#turnLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
});

$('#forward').bind('touchstart mousedown', function () {
  socket.emit('forward');
  $('.button-square').css({ fill: 'rgba(224, 49, 29, 1)' })
  $('#logo-box').css({ backgroundColor: 'rgba(34, 34, 34, 0.1)' })  // background darker
  // $('#logo-box').css({ backgroundColor: 'rgba(255, 243, 33, 1)' })  // background to yellow
  // $('#logo-box').css({ borderColor: 'rgba(255, 243, 33, 1)' })
  // $('#logo-box').css({ borderColor: 'rgba(34, 34, 34, 1)' })

});
$('#forward').bind('touchend mouseup', function () {
  socket.emit('stop');
  $('.button-square').css({ fill: 'rgba(255, 243, 33, 1)' });
  $('#logo-box').css({ backgroundColor: 'rgba(224, 49, 29, 1)' })  // background to red
  // $('#logo-box').css({ borderColor: 'white' })
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
