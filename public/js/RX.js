var socket = io();

// UI FEEDBACK ///////////////////////////////////////////////////////////////

// LOGO //
// socket.on('RxOn', function () {
//   $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
// });
// socket.on('RxOff', function () {
//   $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
// });


// TOP ROW ////////////////////////////////////
socket.on('RX-turnLeft', function () {
  $('.turnLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('RX-forward', function () {
  $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('RX-turnRight', function () {
  $('.turnRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })     // darker red
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })      // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});


// MIDDLE ROW ////////////////////////////////////
socket.on('RX-spinLeft', function () {
  $('.spinLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('RX-stop', function () {
  $('.turnLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })    // gold
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })        // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red

  $('.forward-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })     // gold
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })         // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red

  $('.turnRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })   // gold
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })       // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red

  $('.spinLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })    // gold
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })        // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red

  $('.spinRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })   // gold
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })       // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red

  $('.reverseLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })   // red

  $('.reverse-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })     // gold
  $('.reverse-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })         // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red

  $('.reverseRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })    // red
});

socket.on('RX-spinRight', function () {
  $('.spinRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })     // darker red
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })      // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});


// BOTTOM ROW ////////////////////////////////////
socket.on('RX-reverseLeft', function () {
  $('.reverseLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })   // darker red
  $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })    // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('RX-reverse', function () {
  $('.reverse-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.reverse-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});

socket.on('RX-reverseRight', function () {
  $('.reverseRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
