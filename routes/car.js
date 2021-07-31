const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).json({
     message: 'Car\'s get method'
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

router.get('/:name', (req, res, next) => {
  const name = req.params.name;
  if(name == 'SupraMK-4') {
    res.status(200).json({
      message: 'Is that a SUPRAAAAAA'
    });
  } else {
    res.status(200).json({
      message: 'There is no Toyota Supra'
    });
  }
});

router.put('/:name', (req, res, next) => {
  res.status(200).json({
    message: 'Car\'s post method'
  });
});

module.exports = router;