"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportFacebook = require("passport-facebook");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverUrl = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV; // facebook strategy

const facebookLogin = new _passportFacebook.Strategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: `${serverUrl}${process.env.FACEBOOK_CALLBACK_URL}`,
  profileFields: ['id', 'email', 'gender', 'profileUrl', 'displayName', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'picture.type(large)']
}, async (accessToken, refreshToken, profile, done) => {
  // console.log(profile);
  try {
    const oldUser = await _User.default.findOne({
      email: profile.emails[0].value
    });

    if (oldUser) {
      return done(null, oldUser);
    }
  } catch (err) {
    console.log(err);
  } // register user


  try {
    const newUser = await new _User.default({
      provider: 'facebook',
      facebookId: profile.id,
      username: `user${profile.id}`,
      email: profile.emails[0].value,
      name: profile.displayName,
      avatar: profile.photos[0].value
    }).save();
    done(null, newUser);
  } catch (err) {
    console.log(err);
  }
});

_passport.default.use(facebookLogin);
//# sourceMappingURL=facebookStrategy.js.map