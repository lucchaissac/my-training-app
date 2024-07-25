const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  duration: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Training", trainingSchema);
