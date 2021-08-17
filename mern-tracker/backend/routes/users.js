// require the express router
const router = require("express").Router();

// require the user model
let User = require("../models/user.model");

// first endpoint to get all users
router.route("/").get((req, res) => {
  // mongose will automatically get all users from database
  User.find()
    // returning a promise in a json format
    .then((users) => res.json(users))
    // if there is an error, return an error
    .catch((err) => res.status(400).json("Error: " + err));
});

// second endpoint handle the add http post method
router.route("/add").post((req, res) => {
  // request body
  const username = req.body.username;

  // create a new instance of the user using the username
  const newUser = new User({ username });

  // save the new user to the database
  newUser
    .save()
    // return a json response of succesfully saved user
    .then(() => res.json("User added!"))
    // if there is an error, return an error msg
    .catch((err) => res.status(400).json("Error: " + err));
});

// export the router
module.exports = router;
