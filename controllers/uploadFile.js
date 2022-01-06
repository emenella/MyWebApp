const GridFs = require('../middlewares/GridFs');
const linkModele = require('../schema/link');
const shortid = require('shortid');

const uploadFile = async (req, res) => {
    try {
        await GridFs.uploadFilesMiddleware(req, res);
        if (req.file == undefined) {
            return res.status(406).json({msg: "You must select a file"});
        }
        var link = new linkModele({
            url: shortid.generate(),
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
        linkModele.findById(req.params.id, (err, docs) => {
            if (!err && docs)
                res.status(200).json(docs);
            else res.status(404).json({msg: 'Link not found'});
        }).populate('file').select('-password');
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const addLink = async (req, res) => {
    try {
        var link = new linkModele({
            url: shortid.generate(),
            file: req.params.id
        });
        if (req.body.password) {
            link.password = req.body.password;
        }
        await link.save();
        res.status(200).json({id: link.id})
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const deleteFile = async (req, res) => {
    
}

const deleteLink = async (req, res) => {
    try {
        linkModele.findByIdAndDelete(req.params.id, (err, docs) => {
            if (err || !docs) {
                res.sendStatus(404);
            }
            else {
                res.status(200).json({msg: "link has been deleted"});
            }
        });

    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const dowloadFile = async  (req,res) => {
    
}

module.exports = { uploadFile, getAllLinks, getLink, addLink, deleteFile, deleteLink, dowloadFile};