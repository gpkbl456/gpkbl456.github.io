var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session'),
    logger = require('morgan');

var routes = require('./routes/index');
var users = require('./routes/users');
var apis = require('./routes/apis');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({//啟用cookieSession
  key: 'node',
  secret: 'HelloExpressSESSION'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/apis', apis);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(1234);
