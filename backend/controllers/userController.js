// const pool = require('../config/db.mysql');   //importing mysql schema

// exports.getUsers = async (req, res) => {    //getting all users
//   try {
//     const [rows] = await pool.query('SELECT * FROM users');   //query to get users
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: 'MySQL error', details: err });   //error message with status code
//   }
// };

// exports.createUser = async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);   //query to get users
//     res.json({ message: 'User created' });
//   } catch (err) {
//     res.status(500).json({ error: 'Insert failed', details: err });   //error message with status code
//   }
// };
