import React, { Fragment, useState, useEffect } from "react";
import { activateGame, completeGame } from "../../../../actions/gameActions";
import ScoreSelect from "./ScoreSelect";
import ScoreButtons from "./ScoreButtons";
import ScoreControl from "./ScoreControl";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const EditScoreboard = ({
  user: { user },
  game,
  activateGame,
  completeGame
}) => {
  //Init new Score state
  const [newScore, setNewScore] = useState({
    newScore1: 0,
    newScore2: 0,
    newPeriod: 0,
    newMinutes: 0,
    newSeconds: 0,
    txtUpdate: "",
    newSelect: "newPeriod" //This will be the default
  });

  //Destructure new Score state
  const {
    newScore1,
    newScore2,
    newPeriod,
    newMinutes,
    newSeconds,
    txtUpdate,
    newSelect
  } = newScore;

  //Set the text inputs for the edit values to the game values
  useEffect(() => {
    setNewScore({
      ...newScore,
      newScore1: game.score.hockey.score1,
      newScore2: game.score.hockey.score2,
      newPeriod: game.score.hockey.period,
      newMinutes: game.score.hockey.time.minutes,
      newSeconds: game.score.hockey.time.seconds,
      txtUpdate: ""
    });
  }, [game.score.hockey]);

  // ********************************************************************
  // Event Listeners
  // ********************************************************************

  //Fires when the broadcaster clicks the End Broadcast button. This emits the game_update event to show the game is starting
  const beginBroadcast = async e => {
    if (game.status !== "active") {
      await activateGame(game.gameId);
      game.socket.emit("game_update", {
        gameId: game.gameId,
        sport: game.sport,
        code: "activate",
        data: null
      });
    }
  };

  //Fires when the broadcaster clicks the End Broadcast button. Emits the game_update event to show that the game is over
  const endBroadcast = async e => {
    if (game.status === "active") {
      await completeGame(game.gameId);
      game.socket.emit("game_update", {
        gameId: game.gameId,
        sport: game.sport,
        code: "complete",
        data: null
      });
    }
  };

  //This is fired when either the newScore1, newScore2, newMinutes, newSeconds or newPeriod buttons get pressed.
  //Thid sets the newSelect state to the buton that's pressed. Also, changes bg-light to the selected class and bg-warning to the old selected class
  const onSelectParam = e => {
    e.preventDefault();
    if (e.target.id !== newSelect) {
      e.target.classList.add("bg-light");
      e.target.classList.remove("bg-warning");
      document.getElementById(newSelect).classList.add("bg-warning");
      document.getElementById(newSelect).classList.remove("bg-light");

      setNewScore({ ...newScore, newSelect: e.target.id });
    }
  };

  // This gets fired when either the +,-,0 or reset buttons are pressed
  // This takes the newSelect parameter and does the specific action to that score parameter
  // newSelect is either the newScore1, newScore2, newMinutes, newSeconds or newPeriod button
  // This also puts restrictions on the displayed state and makes the time parameters go to 59 when -1 and
  // sets the maximum and minimum numbers for the scoring parameters
  const onScoreButton = e => {
    e.preventDefault();
    let mathInc = 0;
    let mathMult = 1;
    let mathReset = 0;
    if (e.target.id === "newPlus") mathInc = 1;
    if (e.target.id === "newMinus") mathInc = -1;
    if (e.target.id === "newZero") mathMult = 0;
    if (e.target.id === "newReset") {
      mathMult = 0;
      mathReset = 1;
    }
    switch (newSelect) {
      case "newScore1": {
        let preScore =
          mathMult * (newScore1 + mathInc) +
          mathReset * game.score.hockey.score1;
        if (preScore < 0) preScore = 0;
        if (preScore > 999) preScore = 999;
        setNewScore({
          ...newScore,
          newScore1: preScore
        });
        break;
      }
      case "newScore2": {
        let preScore =
          mathMult * (newScore2 + mathInc) +
          mathReset * game.score.hockey.score2;
        if (preScore < 0) preScore = 0;
        if (preScore > 999) preScore = 999;
        setNewScore({
          ...newScore,
          newScore2: preScore
        });
        break;
      }
      case "newPeriod": {
        let preScore =
          mathMult * (newPeriod + mathInc) +
          mathReset * game.score.hockey.period;
        if (preScore < 0) preScore = 0;
        if (preScore > 99) preScore = 99;
        setNewScore({
          ...newScore,
          newPeriod: preScore
        });
        break;
      }
      case "newMinutes": {
        let preScore =
          mathMult * (newMinutes + mathInc) +
          mathReset * game.score.hockey.time.minutes;
        if (preScore === -1) preScore = 59;
        if (preScore === 60) preScore = 0;
        setNewScore({
          ...newScore,
          newMinutes: preScore
        });
        break;
      }
      case "newSeconds": {
        let preScore =
          mathMult * (newSeconds + mathInc) +
          mathReset * game.score.hockey.time.seconds;
        if (preScore === -1) preScore = 59;
        if (preScore === 60) preScore = 0;
        setNewScore({
          ...newScore,
          newSeconds: preScore
        });
        break;
      }
    }
  };

  //Used for the txtUpdate button so that the state is controlled
  const onUpdate = e => {
    e.preventDefault();
    setNewScore({ ...newScore, txtUpdate: e.target.value });
  };

  //This is the event listener for two buttons, Begin and End broadcast. This calls the specific functions
  const onBroadcast = e => {
    e.preventDefault();
    if (e.target.id === "end-broadcast") endBroadcast(e);
    else beginBroadcast(e);
  };

  //Fires when the broadcaster clicks the Update Broadcast button
  //The scoring update gets emitted
  const onUpdateBroadcast = e => {
    e.preventDefault();
    if (game.status === "active") {
      game.socket.emit(`game_update`, {
        gameId: game.gameId,
        sport: game.sport,
        user: user._id,
        code: "scoreboard",
        scoreboard: {
          score1: newScore1,
          score2: newScore2,
          time: { minutes: newMinutes, seconds: newSeconds },
          period: newPeriod,
          gameUpdate: txtUpdate
        }
      });
      setNewScore({ ...newScore, txtUpdate: "" });
    }
  };

  return (
    <Fragment>
      <form onSubmit={onUpdateBroadcast}>
        <ScoreSelect
          onSelectParam={onSelectParam}
          score1={newScore1}
          score2={newScore2}
          minutes={newMinutes}
          seconds={newSeconds}
          period={newPeriod}
        />
        <ScoreButtons onScoreButton={onScoreButton} status={game.status} />

        <ScoreControl
          txtUpdate={txtUpdate}
          onUpdate={onUpdate}
          status={game.status}
          onBroadcast={onBroadcast}
        />
      </form>
    </Fragment>
  );
};

EditScoreboard.propTypes = {
  game: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game,
  user: state.user
});

export default connect(mapStateToProps, { activateGame, completeGame })(
  EditScoreboard
);
