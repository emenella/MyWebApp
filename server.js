var express = require('express');
var fileApi = require('./routes/fileSharing');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();
var app = express();

const port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongodb is connected")
}).catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`WebApp are listening on ${port}`);
})

app.use('/file/', fileApi);