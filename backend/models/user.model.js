const pool = require('../config/db.mysql');   //importing mysql

const addUser = async ({ firstName, lastName, email, userId }) => {   //executing query to add user
    const [result] = await pool.execute(
      'INSERT INTO users (firstName, lastName, email, userId) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, userId]
    );
    return result;
  };
  

const getUsers = async () => {    //executing query to get all users
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
};

module.exports = { addUser, getUsers };
