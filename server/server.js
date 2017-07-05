const express = require('express');
const app = express();

require('./routes.js')(app, express);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Listening on da port ', port);
});

module.exports = app;
