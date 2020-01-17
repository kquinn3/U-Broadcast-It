const mongoose = require("mongoose");

const LiveUpdateSchema = new mongoose.Schema({
  scoreboard: {
    score1: {
      type: Number,
      min: 0,
      max: 200
    },
    score2: {
      type: Number,
      min: 0,
      max: 200
    },
    time: {
      minutes: {
        type: Number,
        min: 0,
        max: 59
      },
      seconds: {
        type: Number,
        min: 0,
        max: 59
      }
    },
    period: {
      type: Number,
      min: 0,
      max: 3
    },
    gameUpdate: {
      type: String,
      trim: true,
      maxlength: [200, "Must be 200 characters or less"]
    }
  },
  broadcast: {
    type: mongoose.Schema.ObjectId,
    ref: "Broadcast",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("LiveUpdate", LiveUpdateSchema);
