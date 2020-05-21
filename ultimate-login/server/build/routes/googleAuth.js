"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/google', _passport.default.authenticate('google', {
  scope: ['profile', 'email']
}));
const clientUrl = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV;
router.get('/google/callback', _passport.default.authenticate('google', {
  failureRedirect: '/',
  session: false
}), (req, res) => {
  const token = req.user.generateJWT();
  res.cookie('x-auth-cookie', token);
  res.redirect(clientUrl);
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=googleAuth.js.map