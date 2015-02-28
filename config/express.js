var
  config = require ('./config'),
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override')
  session = require('express-session')
;

module.exports = function() {
  var app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app
    .use(bodyParser.urlencoded({
      extended: true
    }))
    .use(bodyParser.json())
    .use(methodOverride())
    .use(session({
      saveUninitialized: true,
      resave: true,
      secret: config.sessionSecret
    }))
  ;

  app
    .set('views', './app/views')
    .set('view engine', 'ejs')
  ;

  require('../app/routes/index.server.routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
