const express = require('express');
const Potluck = require('./potluck-model');

const router = express.Router();

// GET ALL POTLUCKS
router.get('/', (req, res, next) => {
  Potluck.getAllPotlucks()
    .then((allPotlucks) => {
      res.status(200).json(allPotlucks);
    })
    .catch(next);
});

module.exports = router;
