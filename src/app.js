var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("method-override");
var mainRouter = require('./routes/main');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users');
var session = require("express-session");
var app = express();
var bcrypt = require("bcryptjs");
var rememberMiddleware = require("./middlewares/rememberMiddleware")


// view engine setup
app.use(session(
  {
    secret: "esto es un secreto!!",
    resave: false,
    saveUninitialized: true
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(rememberMiddleware); 
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
