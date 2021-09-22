const express = require("express");
const Organizer = require("./organizer-model");

const router = express.Router();

// GET ALL ORGANIZER'S POTLUCKS
router.get("/potluck", (req, res, next) => {
  Organizer.getPotlucks()
    .then((allPotlucks) => {
      res.status(200).json(allPotlucks);
    })
    .catch(next);
});

// CREATE A NEW POTLUCK
router.post("/potluck", (req, res, next) => {
  Organizer.createPotluck(req.body)
    .then((newPotluck) => {
      res.status(201).json(newPotluck);
    })
    .catch(next);
});

// UPDATE A POTLUCKS DETAILS
router.put("/potluck", (req, res, next) => {
  Organizer.updatePotluck(req.body)
    .then((updatedPotluck) => {
      res.status(201).json(updatedPotluck);
    })
    .catch(next);
});

module.exports = router;
