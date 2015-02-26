var
  express = require('express'),
  app = express()
;

app.use('/', function(req, res) {
  res.send('Hello, world!');
});

app.listen(3000);
console.log("Express.js server running on port 3000");

module.exports = app;
