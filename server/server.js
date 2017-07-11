const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../client/')));
require('./routes.js')(app, express);

io.on('connection', function(socket){
  console.log('a user connected');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Listening on da port ', port);
});

module.exports = app;
