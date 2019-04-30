const createError = require('http-errors');
const ReactEngine = require('react-engine');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
var back = require('express-back');
const helmet = require('helmet');
const hpp = require('hpp');
const redisstore = require('connect-redis')(session);

const index = require('./routes/index');
const user = require('./routes/user');
const auth = require('./routes/auth');
const set = require('./routes/set');
const link = require('./routes/link');
const userset = require('./routes/userset');
const userlink = require('./routes/userlink')

const passportConfig = require('./passport');

require('dotenv').config();
//몽고 데이터베이스 접속
const connect = require('./schemas');
connect();

passportConfig(passport);

const app = express();
// create an engine instance
var engine = ReactEngine.server.create({
  /*
    see the complete server options spec here:
    https://github.com/paypal/react-engine#server-options-spec
  */
});
// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/views');

// set jsx or js as the view engine
// (without this you would need to supply the extension to res.render())
// ex: res.render('index.jsx') instead of just res.render('index').
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', require('react-engine/lib/expressView'));

if(process.env.NODE_ENV === 'production'){
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(hpp());
}
else{
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
const sessionOption = {
  resave: false,
  saveUninstialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  store: new redisstore({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASSWORD,
    logErrors: true,
  })
};
if(process.env.NODE_ENV === 'production'){
  sessionOption.proxy = true;
}
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
app.use(back());
app.use('/', index);
app.use('/user', user);
app.use('/auth', auth);
app.use('/set', set);
app.use('/link',link);
app.use('/userset', userset);
app.use('/userlink', userlink);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
