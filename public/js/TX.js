var socket = io();


// TOP ROW ///////////////////////////////////////////////////////////////

// TURN LEFT //
$('#turnLeft').bind('touchstart mousedown', function () {
  socket.emit('turnLeft')
  // $('.turnLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  // $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#turnLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.turnLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })    // gold
  // $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })        // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

// FORWARD //
$('#forward').bind('touchstart mousedown', function () {
  socket.emit('forward');
  // $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  // $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#forward').bind('touchend mouseup', function () {
  socket.emit('stop');
  // $('.forward-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })     // gold
  // $('.forward-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })         // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

// TURN RIGHT //
$('#turnRight').bind('touchstart mousedown', function () {
  socket.emit('turnRight')
  // $('.turnRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })     // darker red
  // $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })      // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#turnRight').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.turnRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })   // gold
  // $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })       // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});



// MIDDLE ROW ///////////////////////////////////////////////////////////
$('#spinLeft').bind('touchstart mousedown', function () {
  socket.emit('spinLeft')
  // $('.spinLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  // $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#spinLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.spinLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })    // gold
  // $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })        // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

$('#spinRight').bind('touchstart mousedown', function () {
  socket.emit('spinRight')
  // $('.spinRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })     // darker red
  // $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })      // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#spinRight').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.spinRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })   // gold
  // $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })       // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});


// BOTTOM ROW ///////////////////////////////////////////////////////////
$('#reverseLeft').bind('touchstart mousedown', function () {
  socket.emit('reverseLeft')
  // $('.reverseLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })   // darker red
  // $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })    // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#reverseLeft').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.reverseLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  // $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })   // red
});

$('#reverse').bind('touchstart mousedown', function () {
  socket.emit('reverse')
  // $('.reverse-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  // $('.reverse-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#reverse').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.reverse-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })     // gold
  // $('.reverse-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })         // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});

$('#reverseRight').bind('touchstart mousedown', function () {
  socket.emit('reverseRight')
  // $('.reverseRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  // $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
$('#reverseRight').bind('touchend mouseup', function () {
  socket.emit('stop')
  // $('.reverseRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  // $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  // $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })    // red
});






// UI FEEDBACK ///////////////////////////////////////////////////////////////

// LOGO //
// socket.on('RxOn', function () {
//   $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
// });
// socket.on('RxOff', function () {
//   $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
// });


// TOP ROW ////////////////////////////////////
socket.on('Rx-turnLeft', function () {
  $('.turnLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('Rx-forward', function () {
  $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('Rx-turnRight', function () {
  $('.turnRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});


// MIDDLE ROW ////////////////////////////////////
socket.on('Rx-spinLeft', function () {
  $('.spinLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('Rx-stop', function () {
  $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('Rx-spinRight', function () {
  $('.spinRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});


// BOTTOM ROW ////////////////////////////////////
socket.on('Rx-reverseLeft', function () {
  $('.reverseLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('Rx-forward', function () {
  $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('Rx-reverseRight', function () {
  $('.reverseRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
