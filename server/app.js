require('dotenv').config()
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');
const https = require('https');
const fs = require('fs');
const passport = require('passport');
const all_routes = require('express-list-endpoints')

// CHRIS'S CONST

// import { resolve, join } from 'path';
// import routes from './routes';
// import { seedDb } from './utils/seed';

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// CONNECT DATABASE
connectDB();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// Bodyparser Middleware
app.use(passport.initialize());
require('./services/jwtStrategy');
// require('./services/facebookStrategy');
require('./services/googleStrategy');
// require('./services/localStrategy');


if(!isProduction) {
  app.use(errorHandler());
}




mongoose.set('debug', true);

// Add models
require('./models/Articles');
// Add routes
app.use('/api/articles', require('./routes/api/articles'));



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

app.listen(8000, () => console.log('Server started on http://localhost:8000'));