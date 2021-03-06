const express = require('express');
var cors = require('cors');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/post.routes');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

//Endpoint
// http: //localhost:4000/api/v1/users
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/posts', postsRouter);

module.exports = { app };
