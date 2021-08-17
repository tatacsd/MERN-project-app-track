// require mongoose
const mongoose = require("mongoose");

// define mongoose schema
const Schema = mongoose.Schema;

// define user schema
const userSchema = new Schema(
  {
    //single field
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  // automatic create field for when user created or updated
  {
    timestamps: true,
  }
);

// create model to export
const User = mongoose.model("User", userSchema);
module.exports = User;
