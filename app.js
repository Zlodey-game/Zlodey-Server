const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const indexRouter = require('./routes/index');
const statusRouter = require('./routes/status');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const inventorysRouter = require('./routes/inventorys');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'sessionKey',
  saveUninitialized: true,
  resave: false,
  store: new MongoStore({
    url: 'mongodb://localhost/Zlodey',
    collection: 'sessions',
  }),
}));

app.use('/', indexRouter);
app.use('/status', statusRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/inventorys', inventorysRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb://localhost/Zlodey', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

module.exports = app;
