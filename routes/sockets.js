const express = require("express");
const socketIo = require("socket.io");
const router = express.Router();
const server = require("../server");
const { hockeySocket } = require("../sockets/hockeySocket");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  await hockeySocket(id);
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
