const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'app/uploads/avatar');
    },
    filename: function (req, file, cb) {
        cb(null, req.body._id);
    }
});

const avatarUpload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } }).single('avatar');

module.exports = avatarUpload;