const express = require('express');
const router = express.Router();
const db = require('../config/db/mysql');

router.get('/', (req, res, next) => {
  const sql = "SELECT * FROM cars";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: 'Success to get the data.',
      data: result
    });
  });
});

router.post('/', (req, res, next) => {
  const cars = {
    name: req.body.name,
    brand: req.body.brand,
  };
  res.status(200).json({
    message: 'Car\'s post method',
    body: cars
  });
});

router.get('/:serial', (req, res, next) => {
  const serial = req.params.serial;
  const sql = "SELECT * FROM cars WHERE serial="+serial;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: 'Car was found!',
      data: result
    });
  });
});

router.put('/:serial', (req, res, next) => {
  res.status(200).json({
    message: 'Car\'s post method'
  });
});

module.exports = router;