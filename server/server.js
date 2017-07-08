const express = require('express');
const path = require('path');
const app = express();
const io = require('socket.io');

app.use(express.static(path.join(__dirname, '../client/')));
require('./routes.js')(app, express);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Listening on da port ', port);
});

module.exports = app;
