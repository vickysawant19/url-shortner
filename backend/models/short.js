const mongoose = require("mongoose");

// Define the schema
const shortSchema = new mongoose.Schema({
  urlid: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

// Create and export the model
module.exports = mongoose.model("Short", shortSchema);
