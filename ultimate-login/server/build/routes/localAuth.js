"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _joi = _interopRequireDefault(require("joi"));

var _faker = _interopRequireDefault(require("faker"));

var _User = _interopRequireDefault(require("../models/User"));

var _requireLocalAuth = _interopRequireDefault(require("../middleware/requireLocalAuth"));

var _validators = require("../services/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', _requireLocalAuth.default, (req, res) => {
  const token = req.user.generateJWT();
  const me = req.user.toJSON();
  res.json({
    token,
    me
  });
});
router.post('/register', async (req, res, next) => {
  const {
    error
  } = _joi.default.validate(req.body, _validators.registerSchema);

  if (error) {
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  const {
    email,
    password,
    name,
    username
  } = req.body;

  try {
    const existingUser = await _User.default.findOne({
      email
    });

    if (existingUser) {
      return res.status(422).send({
        message: 'Email is in use'
      });
    }

    try {
      const newUser = await new _User.default({
        provider: 'email',
        email,
        password,
        username,
        name,
        avatar: _faker.default.image.avatar()
      });
      newUser.registerUser(newUser, (err, user) => {
        if (err) throw err;
        res.json({
          message: 'Register success.'
        }); // just redirect to login
      });
    } catch (err) {
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
}); // logout

router.get('/logout', (req, res) => {
  req.logout();
  res.send(false);
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=localAuth.js.map