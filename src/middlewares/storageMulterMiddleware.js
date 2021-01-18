const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    return cb(null, path.join('.', 'public', 'images', 'users'));
    },
    filename: function (req, file, cb) {
    return cb(null, Date.now() + path.extname(file.originalname));
    },
});


module.exports = storage;