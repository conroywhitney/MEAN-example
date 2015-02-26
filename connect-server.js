var
  connect = require('connect'),
  app = connect(),
  helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
  }
;

app.use(helloWorld);

app.listen(3000);

console.log("Connect server listening at :3000");

