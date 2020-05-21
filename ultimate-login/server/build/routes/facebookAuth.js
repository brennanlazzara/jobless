"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/facebook', _passport.default.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));
const clientUrl = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV;
router.get('/facebook/callback', _passport.default.authenticate('facebook', {
  failureRedirect: '/',
  session: false
}), (req, res) => {
  // console.log(req.user);
  const token = req.user.generateJWT();
  res.cookie('x-auth-cookie', token);
  res.redirect(clientUrl);
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=facebookAuth.js.map