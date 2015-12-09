var socket = io();


// TOP ROW ///////////////////////////////////////////////////////////////

// TURN LEFT //
$('#turnLeft').bind('touchstart mousedown', function () {
  socket.emit('turnLeft')
  $('.turnLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#turnLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
  $('.turnLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

// FORWARD //
$('#forward').bind('touchstart mousedown', function () {
  socket.emit('forward');
  $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#forward').bind('touchend mouseup', function () {
  socket.emit('stop');
  $('.forward-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

// TURN RIGHT //
$('#turnRight').bind('touchstart mousedown', function () {
  socket.emit('turnRight')
  $('.turnRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#turnRight').bind('touchend mouseup', function () {
  socket.emit('stop')
  $('.turnRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});



// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').bind('touchstart mousedown', function () {
  socket.emit('spinLeft')
  $('.spinLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#spinLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
  $('.spinLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

$('#spinRight').bind('touchstart mousedown', function () {
  socket.emit('spinRight')
  $('.spinRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#spinRight').bind('touchend mouseup', function () {
  socket.emit('stop')
  $('.spinRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
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
