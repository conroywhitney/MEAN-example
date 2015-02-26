var
  /* precursor to express.js */
  connect = require('connect'),
  app = connect(),
  /* log info about incoming requests */
  logger = function(req, res, next) {
    console.log(req.method, req.url);
    /* removing next() causes server to hang forever */
    next();
  },
  /* custom middleware */
  helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    /* it's the end() call that causes the server to return */
    res.end('Hello, world!');
  }
;

/* configure middleware chain */
app.use(logger);
app.use(helloWorld);

/* start server on port */
app.listen(3000);

/* message to console to indicate status */
console.log("Connect server listening at :3000");

