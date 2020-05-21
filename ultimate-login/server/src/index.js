import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import https from 'https';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import passport from 'passport';
import all_routes from 'express-list-endpoints';

const session = require('express-session');
const connectDB = require('./config/connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

import routes from './routes';
import { seedDb } from './utils/seed';

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
require('./services/jwtStrategy');
require('./services/facebookStrategy');
require('./services/googleStrategy');
require('./services/localStrategy');

const isProduction = process.env.NODE_ENV === 'production';

// DB Config
const dbConnection = isProduction ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV;

// Connect to Mongo
mongoose
  .connect(dbConnection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB Connected...');
    seedDb();
  })
  .catch((err) => console.log(err));
  
 // CONNECT DATABASE
connectDB();

// Use Routes
app.use('/', routes);
app.use('/public', express.static(join(__dirname, '../public')));

//merge app.use ************

	
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


// *******************
// Serve static assets if in production
if (isProduction) {
  // Set static folder
  app.use(express.static(join(__dirname, '../../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../..', 'client', 'build', 'index.html')); // index is in /server/src so 2 folders up
  });

//*****************
// Add models & routes

require('./models/Articles')

app.use('/api/articles', require('./routes/api/articles'));	


//******************
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

mongoose.set('debug', true);

  const port = process.env.PORT || 80;
  app.listen(port, () => console.log(`Server started on port ${port}`));
} else {
  const port = process.env.PORT || 5000;

  const httpsOptions = {
    key: readFileSync(resolve(__dirname, '../security/cert.key')),
    cert: readFileSync(resolve(__dirname, '../security/cert.pem')),
  };

  const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log('https server running at ' + port);
    // console.log(all_routes(app));
  });
}
