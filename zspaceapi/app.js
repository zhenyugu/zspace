var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var index = require('./routes/index');
var users = require('./routes/users');
var books = require('./routes/books');
var articles = require('./routes/article');

var app = express();
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'gzy1992815',
//   database: 'zspace'
// });
app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/books', books);
app.use('/article', articles)

app.get('/listbooks', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var result;
  connection.query('select * from books', function (err, rows, fields) {
    if (err) throw err;

    result = rows;
  });

   res.json(result);

  // const books = [
  //   {
  //     "id": 1,
  //     "name": "book1",
  //     "author": "author1"
  //   }
  //   ,
  //   {

  //     "id": 2,
  //     "name": "book1",
  //     "author": "author2"
  //   }
  // ]

  // res.json(books);

  // res.json({
  //   "book1": {
  //     "name": "book1"
  //   }
  // })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
