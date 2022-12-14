const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
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
  measurements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'measurements',
    }
  ],
});

module.exports = mongoose.model("devices", schema);