const express = require("express");
const cors = require("cors");

// database mongoose
// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middle where and pass json
app.use(cors());
app.use(express.json());

// Database connection
const uri = process.env.ATLAS_URI;
// const uri =
//   "mongodb+srv://user_01:user_01@cluster0.c6zef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// where our database is stored
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection establish successfully.");
});

// start the server
app.listen(port, () => {
  console.log(`MERN Tracker is running on https://localhost:${port}`);
});
