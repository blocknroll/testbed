module.exports = function (io) {

  io.on('connection', function(socket) {

    // var socket = io();
    var fs = require('fs');
    var fileLocation = '/sys/bus/w1/devices/28-0000060416e5/w1_slave';


    function airTempLoop() {
      fs.readFile(fileLocation, 'utf8', function (err,data) {
        if (err) throw err;
        matches = data.match(/t=([0-9]+)/);
        var temperatureC = parseInt(matches[1]) / 1000;
        var temperatureF = ((temperatureC * 1.8) + 32).toFixed(3);
        output = '{ "temperature": { "celcius": '+ temperatureC +', "fahrenheit": '+ temperatureF +' } }';
        console.log(temperatureF);
        setTimeout(airTempLoop, 1000);

        if (temperatureF < 73.999) {
          console.log('temp < 74. Motor off. 1');
          socket.emit('temp < 74. Motor off');
        }
        if (temperatureF > 74) {
          socket.emit('Motor-on');
          console.log('temp > 74. Motor should be on! WTF????');
        }

      });
    }
    setTimeout(airTempLoop, 10);



    // function temperatureLoop() {
    //
    //   setTimeout(function () {
    //
    //     fs.readFile(fileLocation, 'utf8', function (err,data) {
    //       if (err) throw err;
    //       matches = data.match(/t=([0-9]+)/);
    //       temperatureC = parseInt(matches[1]) / 1000;
    //       temperatureF = ((temperatureC * 1.8) + 32).toFixed(3);
    //       output = '{ "temperature": { "celcius": '+ temperatureC +', "fahrenheit": '+ temperatureF +' } }';
    //       console.log(temperatureF);
    //       temperatureLoop();
    //
    //       if (temperatureF < 73.999) {
    //         console.log('temp < 74. Motor off. 1');
    //         socket.emit('Motor off.');
    //       }
    //       if (temperatureF > 74) {
    //         console.log('temp > 74. Motor should be on! 1');
    //         socket.emit('Motor on!');
    //       }
    //
    //     });
    //
    //   }, 1000);
    // }
    // temperatureLoop();



    socket.on('Motor off.', function () {
      console.log('temp < 74. Motor off. emmitted');
      io.emit('temp < 74. Motor off.');
    });

    socket.on('Motor-on', function () {
      console.log('Motor on! emmitted');
      io.emit('Motor-on');
    });

  });

};
