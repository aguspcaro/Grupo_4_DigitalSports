const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(
      null,
      path.join(__dirname, '..', '..', 'public', 'images', 'products')
    );
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + path.extname(file.originalname));
  },
});

module.exports = storage;
