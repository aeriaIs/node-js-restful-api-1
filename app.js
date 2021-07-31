const express = require('express');
const app = express();

const carRoutes = require('./routes/car');

app.use('/cars', carRoutes);

module.exports = app;