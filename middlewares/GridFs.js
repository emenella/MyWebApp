const multer = require('multer');
const util = require('util');
const {GridFsStorage} = require('multer-gridfs-storage');
require('dotenv').config();

const storage = new GridFsStorage({ url: process.env.GRIDFS, options: { useNewUrlParser: true, useUnifiedTopology: true }, file: (req, file) => {
    return {
      bucketName: 'file',
      filename: `${file.originalname}-${Date.now()}`
    };
  }
});

const upload = multer({ storage }).single("file");
var uploadFilesMiddleware = util.promisify(upload);
module.exports = uploadFilesMiddleware;
