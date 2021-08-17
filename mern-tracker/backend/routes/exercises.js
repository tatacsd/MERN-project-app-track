// require the express router
const router = require("express").Router();

// require the mongoose model
let Exercise = require("../models/exercise.model");

// define the router
// first endpoint is the GET request
router.route("/").get((req, res) => {
  // mongoose find all the exercises from the database
  Exercise.find()
    // return the result as a JSON
    .then((exercises) => res.json(exercises))
    // or return an error if something went wrong
    .catch((err) => res.status(400).json("Error: " + err));
});

// second endpoint is the POST request
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  // convert duration to a number
  const duration = Number(req.body.duration);
  // convert date to a date type
  const date = Date.parse(req.body.date);

  // create a new exercise object from the request
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  // save the exercise to the database
  newExercise
    .save()
    .then((exercise) => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// export the router
module.exports = router;
