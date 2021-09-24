const express = require("express");
const Organizer = require("./organizer-model");

const router = express.Router();

// GET ALL ORGANIZER'S POTLUCKS
router.get("/potlucks", (req, res, next) => {
  Organizer.getPotlucks()
    .then((allPotlucks) => {
      res.status(200).json(allPotlucks);
    })
    .catch(next);
});

// CREATE A NEW POTLUCK
router.post("/create", (req, res, next) => {
  Organizer.createPotluck(req.body)
    .then((newPotluck) => {
      res.status(201).json(newPotluck);
    })
    .catch(next);
});

// UPDATE A POTLUCKS DETAILS
router.put("/update", (req, res, next) => {
  Organizer.updatePotluck(req.body)
    .then((updatedPotluck) => {
      res.status(201).json(updatedPotluck);
    })
    .catch(next);
});

//JOIN POTLUCK
router.post("/join", (req, res, next) => {
  console.log("here");
  Organizer.joinPotluck(req.body.user_id, req.body.potluck_id)
    .then((joinedPotluck) => {
      console.log("hereagain");
      res.status(201).json(joinedPotluck);
    })
    .catch(next);
});
module.exports = router;
