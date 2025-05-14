const express = require('express');
const cors = require('cors');   
require('./config/db.mongo'); // Connect to MongoDB
require('dotenv').config();     //env configuration

//middleware
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/user.routes'));
app.use('/api/comments', require('./routes/comment.routes'));

app.listen(3000, () => console.log('Server on port 3000'));
