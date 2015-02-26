var
  express = require('express'),
  requireName = function(req, res, next) {
    if (req.param('name')) {
      next();
    } else {
      res.send('What is your name?');
    }
  },
  helloWorld = function(req, res, next) {
    res.send('Hello ' + req.param('name'));
  },
  app = express()
;

app.get('/', requireName, helloWorld);

app.listen(3000);
console.log("Express.js server running on port 3000");

module.exports = app;
