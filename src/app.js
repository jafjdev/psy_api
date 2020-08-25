require('dotenv').config();
const userRouter = require('./user/user.routes');
// EXPRESS
const express = require('express');
const app = express();
// ROUTES
app.use(express.json());
app.use(userRouter);

module.exports = app;
