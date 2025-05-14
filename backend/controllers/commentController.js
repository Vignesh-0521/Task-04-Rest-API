const Comment = require('../models/comment.model');   //importing the comments model

exports.getComments = async (req, res) => {     //function to get comments
  try {
    const comments = await Comment.find();    //finding all comments
    res.json(comments);   //response
  } catch (err) {
    res.status(500).json({ error: 'MongoDB error', details: err });   //error message with status code
  }
};

exports.createComment = async (req, res) => {     //function to create comments
  try {
    const comment = new Comment(req.body);    //creating new comment for request body
    await comment.save();   //saving that comment
    res.json({ message: 'Comment added' });   //showing a message
  } catch (err) {
    res.status(400).json({ error: 'Validation failed', details: err });   //error with status code
  }
};
