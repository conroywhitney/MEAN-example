process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var
  express = require('./config/express'),
  app     = express()
;

app.listen(3000);

module.exports = app;

console.log('Express.js server running on port :3000');
