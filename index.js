const express = require('express');
const app     = express();
const http    = require('http').Server(app);


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('hello worlds!!!');
});

http.listen(3000, function () {
  console.log('listening on localhost:3000');
});
