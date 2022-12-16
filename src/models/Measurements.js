const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  value: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("measurements", schema);