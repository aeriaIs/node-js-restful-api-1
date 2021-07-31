const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/car');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/cars', carRoutes);

module.exports = app;