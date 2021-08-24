const express = require('express');
const app = express.Router();

app.use(require('./images'));

module.exports = app;