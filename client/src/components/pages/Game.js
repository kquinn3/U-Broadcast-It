import React, { Fragment, useEffect } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadGame,
  clearGame,
  openSocketGame,
  scoreGame,
  messageGame,
  activateGameUser,
  completeGameUser
} from "../../actions/gameActions";

import Hockey from "../layouts/games/hockey/Hockey.js";

const Game = ({
  match: {
    params: { id }
  },
  game: { sport, socket },
  user: { user },
  loadGame,
  clearGame,
  openSocketGame,
  scoreGame,
  messageGame,
  activateGameUser,
  completeGameUser
}) => {
  //Use effect calls initGame when the page is loaded. InitGame also opens the socket for the game and connects the game
  useEffect(() => {
    initGame(id);
    // eslint-disable-next-line
  }, []);

  //Use effect calls clearGame when the page is unloaded. The socket should be automatically closed. Need to check
  useEffect(
    () => () => unloadGame(),
    // eslint-disable-next-line
    []
  );

  //User enters the page
  const initGame = async id => {
    await loadGame(id, user);
    if (socket === null) {
      // socket = io.connect("http://localhost:5000/");
      socket = io.connect("/");
      openSocketGame(socket);
    }
    socket.emit("join_game", { id });
    //Don't add extra listeners. This is handled in the rooms on the server
    if (!socket.hasListeners("game_update"))
      socket.on("game_update", data => handleGameUpdate(data));
  };

  const handleGameUpdate = message => {
    const { sport, user, code, scoreboard } = message;
    switch (code) {
      case "activate":
        activateGameUser(); //Only needed if user entered before the broadcaster
        return;
      case "complete":
        completeGameUser(); //Only needed if user entered before the broadcaster
        return;
      case "scoreboard":
        scoreGame(scoreboard, sport);
        return;
      case "game_message":
        const msgMessage = {
          _id: scoreboard._id,
          user: user.name,
          gameMessage: scoreboard.gameMessage,
          createdAt: scoreboard.createdAt
        };
        messageGame(msgMessage);
        return;
      default:
        console.log("Something is not right");
        return;
    }
  };

  //User leaves the page
  const unloadGame = async id => {
    await clearGame(id);
  };

  return <Fragment>{sport === "hockey" && <Hockey />}</Fragment>;
};

Game.propTypes = {
  user: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  game: state.game
});

export default connect(mapStateToProps, {
  loadGame,
  clearGame,
  openSocketGame,
  scoreGame,
  messageGame,
  activateGameUser,
  completeGameUser
})(Game);
