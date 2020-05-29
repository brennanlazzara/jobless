require('dotenv').config()
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');
const passport = require("passport");
const app = express();

const isProduction = process.env.NODE_ENV === 'production';

mongoose.promise = global.Promise;
mongoose.set('debug', true);

connectDB();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(passport.initialize());
require('./services/jwtStrategy');
require('./services/googleStrategy');
require('./services/localStrategy');

if(!isProduction) {
  app.use(errorHandler());
}

app.use(express.static(__dirname + './client/build'));

require('./models/Articles');

app.use(require("./routes"));
app.use('/api/jobs', require('./routes/api/jobs'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});