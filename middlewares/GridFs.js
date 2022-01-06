const multer = require('multer');
const util = require('util');
var mongoose = require('mongoose');
const {GridFsStorage} = require('multer-gridfs-storage');
const gridfs = require('gridfs');
require('dotenv').config();

const storage = new GridFsStorage({ url: process.env.GRIDFS, options: { useNewUrlParser: true, useUnifiedTopology: true }, file: (req, file) => {
    return {
      bucketName: 'file',
      filename: `${file.originalname}-${Date.now()}`
    };
  }
});

var db = mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("Mongodb is connected")
}).catch((err) => console.log(err));

var gfs = gridfs(db, mongoose.mongo);

const upload = multer({ storage }).single("file");
var uploadFilesMiddleware = util.promisify(upload);
module.exports = { uploadFilesMiddleware, gfs};
