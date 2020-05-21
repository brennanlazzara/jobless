"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidUrl = exports.deleteAllAvatars = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = require("util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readdir = (0, _util.promisify)(_fs.default.readdir);
const unlink = (0, _util.promisify)(_fs.default.unlink);

const deleteAllAvatars = async absoluteFolderPath => {
  try {
    const files = await readdir(absoluteFolderPath);
    const unlinkPromises = files.map(filename => {
      if (!['avatar0.png', 'avatar1.png', 'avatar2.png'].includes(filename)) {
        console.log('Deleting avatar: ', filename);
        unlink(`${absoluteFolderPath}/${filename}`);
      }
    });
    return Promise.all(unlinkPromises);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteAllAvatars = deleteAllAvatars;

const isValidUrl = str => {
  var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
  var url = new RegExp(urlRegex, 'i');
  return str.length < 2083 && url.test(str);
};

exports.isValidUrl = isValidUrl;
//# sourceMappingURL=utils.js.map