const mongoose = require("mongoose");

const LiveMessageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  broadcast: {
    type: mongoose.Schema.ObjectId,
    ref: "Broadcast",
    required: true
  },
  gameMessage: {
    type: String,
    trim: true,
    maxlength: [200, "Must be 200 characters or less"]
  },
  createdAt: {
    type: Date,
    default: Date.Now
  }
});

module.exports = mongoose.model("LiveMessage", LiveMessageSchema);
