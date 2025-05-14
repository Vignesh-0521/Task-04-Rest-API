const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);        //connecting to mongo

module.exports = mongoose;      //exporting
