"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _path = require("path");

var _requireJwtAuth = _interopRequireDefault(require("../../middleware/requireJwtAuth"));

var _User = _interopRequireWildcard(require("../../models/User"));

var _Message = _interopRequireDefault(require("../../models/Message"));

var _seed = require("../../utils/seed");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

const storage = _multer.default.diskStorage({
  destination: function (req, file, cb) {
    cb(null, (0, _path.resolve)(__dirname, '../../../public/images'));
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, `avatar-${Date.now()}-${fileName}`);
  }
});

const upload = (0, _multer.default)({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}); //`checkit`, which is probably the option I'd suggest if  `validatem`

router.put('/:id', [_requireJwtAuth.default, upload.single('avatar')], async (req, res, next) => {
  try {
    const tempUser = await _User.default.findById(req.params.id);
    if (!tempUser) return res.status(404).json({
      message: 'No such user.'
    });
    if (!(tempUser.id === req.user.id || req.user.role === 'ADMIN')) return res.status(400).json({
      message: 'You do not have privilegies to edit this user.'
    }); //validate name, username and password

    const {
      error
    } = (0, _User.validateUser)(req.body);
    if (error) return res.status(400).json({
      message: error.details[0].message
    });
    let avatarPath = null;

    if (req.file) {
      avatarPath = req.file.filename;
    } // if fb or google user provider dont update password


    let password = null;

    if (req.user.provider === 'email' && req.body.password && req.body.password !== '') {
      password = await (0, _User.hashPassword)(req.body.password);
    }

    const existingUser = await _User.default.findOne({
      username: req.body.username
    });

    if (existingUser && existingUser.id !== tempUser.id) {
      return res.status(400).json({
        message: 'Username alredy taken.'
      });
    }

    const updatedUser = {
      avatar: avatarPath,
      name: req.body.name,
      username: req.body.username,
      password
    }; // remove '', null, undefined

    Object.keys(updatedUser).forEach(k => !updatedUser[k] && updatedUser[k] !== undefined && delete updatedUser[k]); // console.log(req.body, updatedUser);

    const user = await _User.default.findByIdAndUpdate(tempUser.id, {
      $set: updatedUser
    }, {
      new: true
    });
    res.status(200).json({
      user
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.get('/reseed', async (req, res) => {
  await (0, _seed.seedDb)();
  res.json({
    message: 'Database reseeded successfully.'
  });
});
router.get('/me', _requireJwtAuth.default, (req, res) => {
  const me = req.user.toJSON();
  res.json({
    me
  });
});
router.get('/:username', _requireJwtAuth.default, async (req, res) => {
  try {
    const user = await _User.default.findOne({
      username: req.params.username
    });
    if (!user) return res.status(404).json({
      message: 'No user found.'
    });
    res.json({
      user: user.toJSON()
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.get('/', _requireJwtAuth.default, async (req, res) => {
  try {
    const users = await _User.default.find().sort({
      createdAt: 'desc'
    });
    res.json({
      users: users.map(m => {
        return m.toJSON();
      })
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.delete('/:id', _requireJwtAuth.default, async (req, res) => {
  try {
    const tempUser = await _User.default.findById(req.params.id);
    if (!tempUser) return res.status(404).json({
      message: 'No such user.'
    });
    if (!(tempUser.id === req.user.id || req.user.role === 'ADMIN')) return res.status(400).json({
      message: 'You do not have privilegies to delete that user.'
    }); // if (['email0@email.com', 'email1@email.com'].includes(tempUser.email))
    //   return res.status(400).json({ message: 'You can not delete seeded user.' });
    //delete all messages from that user

    await _Message.default.deleteMany({
      user: tempUser.id
    }); //delete user

    const user = await _User.default.findByIdAndRemove(tempUser.id);
    res.status(200).json({
      user
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=users.js.map