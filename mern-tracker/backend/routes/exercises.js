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

// Add the CRUD endpoints to the router
// Get the exercise by id variable created automatically by mongoose
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete the exercise by id
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndRemove(req.params.id)
    .then((exercise) => res.json("Exercise deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update the exercise by id
router.route("/update/:id").post((req, res) => {
  // find current exercise by id
  // pass the parameter to the findById method from the url
  Exercise.findById(req.params.id)
    .then((exercise) => {
      // the request body is using the json object that was sent in the route post request
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      // save the exercise to the database with the new information
      exercise
        .save()
        .then((exercise) => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// export the router
module.exports = router;
