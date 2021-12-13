const GridFs = require('../middlewares/GridFs');
const linkModele = require('../schema/link');
const shortid = require('shortid');

const uploadFile = async (req, res) => {
    try {
        await GridFs(req, res);
        if (req.file == undefined) {
            return res.status(406).json({msg: "You must select a file"});
        }
        var link = new linkModele({
            link: shortid.generate(),
            file: req.file.id
        });
        if (req.body.password) {
            link.password = req.body.password;
        }
        await link.save();
        return res.status(200).json({id: req.file.id});
    }
    catch(e) {
        console.log(e);
        return res.sendStatus(500);
    }
};

const getAllLinks = async (req, res) => {
    try {
        const result = await linkModele.find().select('-password');
        res.status(200).json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

const getLink = async (req, res) => {
    try {
        linkModele.findOne({id: req.params.id}, (err, docs) => {
            if (!err)
                res.status(200).json(docs);
            else res.status(404).json({msg: 'Link not found'});
        }).populate('file').select('-password');
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = { uploadFile, getAllLinks, getLink };