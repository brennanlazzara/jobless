"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _joi = _interopRequireDefault(require("joi"));

var _User = _interopRequireDefault(require("../models/User"));

var _validators = require("./validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passportLogin = new _passportLocal.Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, async (req, email, password, done) => {
  const {
    error
  } = _joi.default.validate(req.body, _validators.loginSchema);

  if (error) {
    return done(null, false, {
      message: error.details[0].message
    });
  }

  try {
    const user = await _User.default.findOne({
      email: email.trim()
    });

    if (!user) {
      return done(null, false, {
        message: 'Email does not exists.'
      });
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }

      return done(null, user);
    });
  } catch (err) {
    return done(err);
  }
});

_passport.default.use(passportLogin);
//# sourceMappingURL=localStrategy.js.map