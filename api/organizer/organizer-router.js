const express = require('express');
const Organizer = require('./organizer-model');

const router = express.Router();

// GET ALL ORGANIZER'S POTLUCKS
router.get('/:user_id', (req, res, next) => {
  Organizer.getPotlucks(req.params.user_id)
    .then((allPotlucks) => {
      res.status(200).json(allPotlucks);
    })
    .catch(next);
});

// CREATE A NEW POTLUCK
router.post('/potlucks', (req, res, next) => {
  Organizer.createPotluck(req.body)
    .then((newPotluck) => {
      res.status(201).json(newPotluck);
    })
    .catch(next);
});

// CREATE POTLUCK FOOD LIST
router.post('/food/:potluck_id', (req, res, next) => {
  Organizer.createFoodList(req.body, req.params.potluck_id)
    .then((newFoodList) => {
      res.status(201).json(newFoodList);
    })
    .catch(next);
});


// UPDATE A POTLUCKS DETAILS
router.put('/:potluck_id', (req, res, next) => {
  Organizer.updatePotluck(req.params.potluck_id, req.body)
    .then((updatedPotluck) => {
      res.status(200).json(updatedPotluck);
    })
    .catch(next);
});

module.exports = router;
