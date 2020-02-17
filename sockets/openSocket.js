const express = require("express");
const socket = require("socket.io");
const server = require("../server");
const LiveUpdate = require("../models/LiveUpdate");
const LiveMessage = require("../models/LiveMessage");

exports.openSocket = io => {
  const game = new SocketTracker(io);
};

class SocketTracker {
  constructor(io) {
    this.addListener(io);
  }
  addListener(io) {
    io.on("connection", socket => {
      socket.on("join_game", async msg => {
        if (socket.room) {
          await socket.leave(socket.room);
        }
        socket.room = msg.id;
        await socket.join(msg.id);
      });
      socket.on("leave_game", msg => {
        socket.leave(msg.id);
      });

      socket.on("game_update", msg => this.handleGameUpdate(msg, socket, io));
    });
  }
  handleGameUpdate = (msg, socket, io) => {
    const { gameId, sport, user, code, scoreboard } = msg;
    switch (code) {
      case "activate":
      case "complete":
        socket.in(gameId).emit("game_update", msg);
        return;
      case "scoreboard":
        const update = {
          scoreboard: scoreboard,
          broadcast: gameId,
          user: user
        };

        LiveUpdate.create(update, (err, data) => {
          //socket.in(data.broadcast).emit("game_update", {
          io.in(data.broadcast).emit("game_update", {
            gameId,
            sport,
            user,
            code: "scoreboard",
            scoreboard: data
          });
        });

        return;
      case "game_message":
        const message = {
          gameMessage: scoreboard.txtMessage,
          broadcast: gameId,
          user: user,
          createdAt: Date.now()
        };
        LiveMessage.create(message, (err, data) => {
          io.in(data.broadcast).emit("game_update", {
            gameId,
            sport,
            user: user,
            code: "game_message",
            scoreboard: data
          });
        });
        return;
      case "update":
        return;
      case "default":
        return;
    }
  };
}
