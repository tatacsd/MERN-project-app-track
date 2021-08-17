const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middle where and pass json
app.use(cors());
app.use(express.json());

// start the server
app.listen(port, () => {
  console.log(`MERN Tracker is running on port ${port}`);
});
