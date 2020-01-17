const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const moment = require("moment");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const LiveUpdate = require("../models/LiveUpdate");

// @desc    Get GameServices for a game (id=BroadcastId)
// @route   GET /services/games/:id
// @access  Public
exports.getGameServices = asyncHandler(async (req, res, next) => {
  const app = req.app;
  console.log("It is in the wrong route");
  app.configure(socketio());
  //Enable REST services
  app.configure(express.rest());
  app.use("/services", new GameUpdateService());
  app.on("connection", conn => {
    app.channel("stream").join(conn);
  });

  //Publish events to stream
  app.publish(data => app.channel("stream"));
  //Example need to delete
  app.service("services").create({
    text: "Build a cool app",
    time: moment().format("h:mm:ss a")
  });

  // app.service("gameUpdates").create({
  //   text: "Make a real time sports tracker",
  //   time: moment().format("h:mm:ss a")
  // });
  //return app.service("services");
  res.status(200).json();
});

// @desc    Create new broadcast
// @route   POST /services/games/:id
// @access  Private
exports.addGameService = asyncHandler(async (req, res, next) => {
  res.status(201).json({ success: true, data: "Not done yet" });
});

//UpdateService Need to pull this out and use mongo to store it
class GameUpdateService {
  constructor() {
    this.gameUpdates = [];
  }
  async find() {
    return this.gameUpdates;
  }
  async create(data) {
    const gameUpdate = {
      id: this.gameUpdates.length,
      text: data.text
    };
    gameUpdate.time = moment().format("h:mm:ss a");
    this.gameUpdates.push(gameUpdate);
    console.log(this.gameUpdates);
    return gameUpdate;
  }
}
