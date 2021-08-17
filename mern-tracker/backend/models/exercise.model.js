// require mongoose
const mongoose = require("mongoose");

// define mongoose schema
const Schema = mongoose.Schema;

// define exercise model
const exerciseSchema = new Schema(
  {
    // four fields are required
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    // automatic create a field for when it is created or updated
    timestamps: true,
  }
);

// export exercise model
module.exports = mongoose.model("Exercise", exerciseSchema);
