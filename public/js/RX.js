var socket = io();

// UI FEEDBACK ///////////////////////////////////////////////////////////////

// LOGO ////////////////////////////////////
socket.on('RX-on', function () {
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 42%, 1)' })  // darker red
});
socket.on('RX-off', function () {
  $('#logo-box').css({ backgroundColor: 'hsla(6, 77%, 50%, 1)' })  // red
});


// TOP ROW ////////////////////////////////////
socket.on('RX-turnLeft', function () {
  $('.turnLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
});

socket.on('RX-forward', function () {
  $('.forward-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
});

socket.on('RX-turnRight', function () {
  $('.turnRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })     // darker red
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })      // white
});


// MIDDLE ROW ////////////////////////////////////
socket.on('RX-spinLeft', function () {
  $('.spinLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })      // darker red
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })       // white
});

socket.on('RX-stop', function () {
  $('.turnLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })    // gold
  $('.turnLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })        // charcoal

  $('.forward-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })     // gold
  $('.forward-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })         // charcoal

  $('.turnRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })   // gold
  $('.turnRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })       // charcoal

  $('.spinLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })    // gold
  $('.spinLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })        // charcoal

  $('.spinRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })   // gold
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })       // charcoal

  $('.reverseLeft-square').css({ fill: 'hsla(57, 100%, 56%, 1)' }) // gold
  $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })     // charcoal

  $('.reverse-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })     // gold
  $('.reverse-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })         // charcoal

  $('.reverseRight-square').css({ fill: 'hsla(57, 100%, 56%, 1)' })  // gold
  $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 13%, 1)' })      // charcoal
});

socket.on('RX-spinRight', function () {
  $('.spinRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })     // darker red
  $('.spinRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })      // white
});


// BOTTOM ROW ////////////////////////////////////
socket.on('RX-reverseLeft', function () {
  $('.reverseLeft-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })   // darker red
  $('.reverseLeft-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })    // white
});

socket.on('RX-reverse', function () {
  $('.reverse-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })       // darker red
  $('.reverse-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })        // white
});

socket.on('RX-reverseRight', function () {
  $('.reverseRight-square').css({ fill: 'hsla(6, 77%, 42%, 1)' })  // darker red
  $('.reverseRight-arrow').css({ fill: 'hsla(0, 0%, 100%, 1)' })   // white
});
