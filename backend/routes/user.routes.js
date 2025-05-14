const express = require('express');
const router = express.Router();
const { addUser, getUsers } = require('../models/user.model.js');

router.post('/', async (req, res) => {    //post method
    const { firstName, lastName, email, userId } = req.body;    //getting from body 
  
    if (!firstName || !lastName || !email || !userId) {   //error message
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      const result = await addUser({ firstName, lastName, email, userId });   //adding user
      res.status(201).json({ message: 'User added', id: result.insertId });   //message with success code
    } catch (error) {
      console.error('Insert error:', error.message);    //error message with error status code
      res.status(500).json({ error: 'Database insert failed' });
    }
  });
  

router.get('/', async (req, res) => {   //get method
  try {
    const users = await getUsers();   //getting all users
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);    //error message with status code
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
