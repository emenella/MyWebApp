var express = require('express');
var fileController = require('../controllers/uploadFile');
var router = express.Router();


router.get('/', (req, res) => {

});

router.post('/add', fileController.uploadFile);

router.get('/link', fileController.getAllLinks);
router.get('/link/:id', fileController.getLink);

module.exports = router;