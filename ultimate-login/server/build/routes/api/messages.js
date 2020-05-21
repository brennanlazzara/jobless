"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _requireJwtAuth = _interopRequireDefault(require("../../middleware/requireJwtAuth"));

var _Message = _interopRequireWildcard(require("../../models/Message"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', async (req, res) => {
  try {
    const messages = await _Message.default.find().sort({
      createdAt: 'desc'
    }).populate('user');
    res.json({
      messages: messages.map(m => {
        return m.toJSON();
      })
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const message = await _Message.default.findById(req.params.id).populate('user');
    if (!message) return res.status(404).json({
      message: 'No message found.'
    });
    res.json({
      message: message.toJSON()
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.post('/', _requireJwtAuth.default, async (req, res) => {
  const {
    error
  } = (0, _Message.validateMessage)(req.body);
  if (error) return res.status(400).json({
    message: error.details[0].message
  });

  try {
    let message = await _Message.default.create({
      text: req.body.text,
      user: req.user.id
    });
    message = await message.populate('user').execPopulate();
    res.status(200).json({
      message: message.toJSON()
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.delete('/:id', _requireJwtAuth.default, async (req, res) => {
  try {
    const tempMessage = await _Message.default.findById(req.params.id).populate('user');
    if (!(tempMessage.user.id === req.user.id || req.user.role === 'ADMIN')) return res.status(400).json({
      message: 'Not the message owner or admin.'
    });
    const message = await _Message.default.findByIdAndRemove(req.params.id).populate('user');
    if (!message) return res.status(404).json({
      message: 'No message found.'
    });
    res.status(200).json({
      message
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
router.put('/:id', _requireJwtAuth.default, async (req, res) => {
  const {
    error
  } = (0, _Message.validateMessage)(req.body);
  if (error) return res.status(400).json({
    message: error.details[0].message
  });

  try {
    const tempMessage = await _Message.default.findById(req.params.id).populate('user');
    if (!(tempMessage.user.id === req.user.id || req.user.role === 'ADMIN')) return res.status(400).json({
      message: 'Not the message owner or admin.'
    });
    let message = await _Message.default.findByIdAndUpdate(req.params.id, {
      text: req.body.text,
      user: tempMessage.user.id
    }, {
      new: true
    });
    if (!message) return res.status(404).json({
      message: 'No message found.'
    });
    message = await message.populate('user').execPopulate();
    res.status(200).json({
      message
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong.'
    });
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=messages.js.map