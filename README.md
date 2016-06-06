# Testa-Rossa-Boxer

![Testa Rossa Boxer](/images/trb.jpg?raw=true)

Testa-Rossa-Boxer is a testbed for JavaScript robotics with web-based remote controls.

It's basically an RC car with a web app for its control transmitter. Or it's a web server that can be driven around the room – whichever you prefer.

To begin, the bot uses a [Raspberry Pi](https://www.raspberrypi.org/) with  [Node.js](https://nodejs.org/en/) running an  [Express](http://expressjs.com/en/index.html) web server.

The bot/server hosts a mobile web UI – with buttons that allow us to communicate back to the bot in real-time. [Socket.io](http://socket.io/) is used to enable the real-time connection via web sockets.

The [Johnny-Five](http://johnny-five.io/) robotics library is then used to translate and issue our commands to the bot.

Finally, an [Arduino](https://www.arduino.cc/) manages these commands and sends physical signals via an [H-Bridge Motor Driver](https://www.sparkfun.com/products/315) to the bot's [electric motors](https://www.sparkfun.com/products/13258).

Please check back for a build tutorial...
