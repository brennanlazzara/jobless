const express = require('express');
const app = express();
require('./Model/User');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const authService = require('./Services/AuthService');
const passportSetup = require('./config/passport-setup');

// GRANTS REQUIRES
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
mongoose.promise = global.Promise;
const isProduction = process.env.NODE_ENV === 'production';


require('dotenv').config();



// GRANTS APP.USE
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
if(!isProduction) {
  app.use(errorHandler());
}


// GRANTS MONGOOSE CONNECT
mongoose.connect('mongodb://localhost/blogpost');
mongoose.set('debug', true);
// Add models
require('./models/Articles');
// Add routes
app.use(require('./routes'));
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


// CHRIS'S MONGOOSE

const mongodbUri = process.env.MONGO_URI;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(mongodbUri, { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
  if (error) console.log(error);
});

app.use(function(req, res, next) {
  let allowedOrigins = ['*']; // list of url-s
  let origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'Content-Disposition');
  next();
});
app.use(passport.initialize());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/'));
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// ############# GOOGLE AUTHENTICATION ################
// this will call passport-setup.js authentication in the config directory

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/api/token', (req, res) => {
  res.json([]);
});

app.get(
  '/auth/google',
  passport.authenticate('google', {
    session: false,
    scope: ["profile", "email"],
    accessType: "offline",
    approvalPrompt: "force"
  })
);

// callback url upon successful google authentication
app.get(
  '/auth/google/callback/',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    authService.signToken(req, res);
  }
);

// route to check token with postman.
// using middleware to check for authorization header
app.get('/verify', authService.checkTokenMW, (req, res) => {
  authService.verifyToken(req, res);
  if (null === req.authData) {
    res.sendStatus(403);
  } else {
    res.json(req.authData);
  }
});

app.listen(5000, function() {
  console.log('Express app listening on port 5000!');
});