var express = require('express');
var fileController = require('../controllers/uploadFile');
var router = express.Router();


router.post('/add', fileController.uploadFile);
router.post('/addlink/:id', fileController.addLink)

router.get('/', fileController.getAllLinks);
router.get('/:id', fileController.getLink);
router.get('/dl/:link', fileController.dowloadFile);

router.delete('/delete/:id', fileController.deleteFile);
router.delete('/deleteLink/:id', fileController.deleteLink);

module.exports = router;