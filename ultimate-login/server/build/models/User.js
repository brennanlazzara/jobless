"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = hashPassword;
exports.default = exports.validateUser = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = require("path");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _joi = _interopRequireDefault(require("joi"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const userSchema = new Schema({
  provider: {
    type: String,
    required: true
  },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    maxlength: 60
  },
  name: String,
  avatar: String,
  role: {
    type: String,
    default: 'USER'
  },
  bio: String,
  // google
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  // fb
  facebookId: {
    type: String,
    unique: true,
    sparse: true
  },
  messages: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Message'
  }]
}, {
  timestamps: true
});
console.log((0, _path.join)(__dirname, '../..', process.env.IMAGES_FOLDER_PATH));

userSchema.methods.toJSON = function () {
  // if not exists avatar1 default
  const absoluteAvatarFilePath = `${(0, _path.join)(__dirname, '../..', process.env.IMAGES_FOLDER_PATH)}${this.avatar}`;
  const avatar = (0, _utils.isValidUrl)(this.avatar) ? this.avatar : _fs.default.existsSync(absoluteAvatarFilePath) ? `${process.env.IMAGES_FOLDER_PATH}${this.avatar}` : `${process.env.IMAGES_FOLDER_PATH}avatar2.png`;
  return {
    id: this._id,
    provider: this.provider,
    email: this.email,
    username: this.username,
    avatar: avatar,
    name: this.name,
    role: this.role,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

const isProduction = process.env.NODE_ENV === 'production';
const secretOrKey = isProduction ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET_DEV;

userSchema.methods.generateJWT = function () {
  const token = _jsonwebtoken.default.sign({
    expiresIn: '12h',
    id: this._id,
    provider: this.provider,
    email: this.email
  }, secretOrKey);

  return token;
};

userSchema.methods.registerUser = (newUser, callback) => {
  _bcryptjs.default.genSalt(10, (err, salt) => {
    _bcryptjs.default.hash(newUser.password, salt, (errh, hash) => {
      if (err) {
        console.log(err);
      } // set pasword to hash


      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  _bcryptjs.default.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
}; // const delay = (t, ...vs) => new Promise(r => setTimeout(r, t, ...vs)) or util.promisify(setTimeout)


async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await new Promise((resolve, reject) => {
    _bcryptjs.default.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err);else resolve(hash);
    });
  });
  return hashedPassword;
}

const validateUser = user => {
  const schema = {
    avatar: _joi.default.any(),
    name: _joi.default.string().min(2).max(30).required(),
    username: _joi.default.string().min(2).max(20).regex(/^[a-zA-Z0-9_]+$/).required(),
    password: _joi.default.string().min(6).max(20).allow('').allow(null)
  };
  return _joi.default.validate(user, schema);
};

exports.validateUser = validateUser;

const User = _mongoose.default.model('User', userSchema);

var _default = User;
exports.default = _default;
//# sourceMappingURL=User.js.map