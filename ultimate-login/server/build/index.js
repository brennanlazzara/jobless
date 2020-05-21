"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _https = _interopRequireDefault(require("https"));

var _fs = require("fs");

var _path = require("path");

var _passport = _interopRequireDefault(require("passport"));

var _expressListEndpoints = _interopRequireDefault(require("express-list-endpoints"));

var _routes = _interopRequireDefault(require("./routes"));

var _seed = require("./utils/seed");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // Bodyparser Middleware

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_passport.default.initialize());

require('./services/jwtStrategy');

require('./services/facebookStrategy');

require('./services/googleStrategy');

require('./services/localStrategy');

const isProduction = process.env.NODE_ENV === 'production'; // DB Config

const dbConnection = isProduction ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV; // Connect to Mongo

_mongoose.default.connect(dbConnection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB Connected...');
  (0, _seed.seedDb)();
}).catch(err => console.log(err)); // Use Routes


app.use('/', _routes.default);
app.use('/public', _express.default.static((0, _path.join)(__dirname, '../public'))); // Serve static assets if in production

if (isProduction) {
  // Set static folder
  app.use(_express.default.static((0, _path.join)(__dirname, '../../client/build')));
  app.get('*', (req, res) => {
    res.sendFile((0, _path.resolve)(__dirname, '../..', 'client', 'build', 'index.html')); // index is in /server/src so 2 folders up
  });
  const port = process.env.PORT || 80;
  app.listen(port, () => console.log(`Server started on port ${port}`));
} else {
  const port = process.env.PORT || 5000;
  const httpsOptions = {
    key: (0, _fs.readFileSync)((0, _path.resolve)(__dirname, '../security/cert.key')),
    cert: (0, _fs.readFileSync)((0, _path.resolve)(__dirname, '../security/cert.pem'))
  };

  const server = _https.default.createServer(httpsOptions, app).listen(port, () => {
    console.log('https server running at ' + port); // console.log(all_routes(app));
  });
}
//# sourceMappingURL=index.js.map