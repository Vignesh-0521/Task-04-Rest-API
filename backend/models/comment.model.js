const mongoose = require('mongoose');  //importing mongoose

const commentSchema = new mongoose.Schema({   //defining schema
  userId: Number,
  text: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);
