const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const link = Schema({
    url: {require: true, type: String, lowercase: true},
    file: {require: true, type: Schema.Types.ObjectId, ref: "file"},
    password: {require: false, type: String, minLength: 3, maxLength: 55}
},
{
    timestamps: true
}
);

link.pre('save', async function(next)
{
    if (this.password)
    {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const linkModele = mongoose.model('link', link);
const GFS = mongoose.model("file", new Schema({}, {strict: false}), "file.files" );

module.exports = linkModele;