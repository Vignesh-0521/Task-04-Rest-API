const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
router.get('/', commentController.getComments);     //route to get all comments
router.post('/', commentController.createComment);      //route to create comments
module.exports = router;