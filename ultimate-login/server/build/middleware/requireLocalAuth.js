"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requireLocalAuth = (req, res, next) => {
  _passport.default.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(422).send(info);
    }

    req.user = user;
    next();
  })(req, res, next);
};

var _default = requireLocalAuth;
exports.default = _default;
//# sourceMappingURL=requireLocalAuth.js.map