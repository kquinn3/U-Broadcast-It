import axios from "axios";

import {
  //Game related
  LOAD_GAME_SUCCESS,
  LOAD_GAME_FAIL,
  ACTIVATE_GAME_SUCCESS,
  ACTIVATE_GAME_FAIL,
  CONNECT_SOCKET_SUCCESS,
  CONNECT_SOCKET_FAIL,
  SCORE_GAME_SUCCESS,
  SCORE_GAME_FAIL,
  VIEW_EDIT_SCOREBOARD,
  NOVIEW_EDIT_SCOREBOARD,
  MESSAGE_GAME_SUCCESS,
  MESSAGE_GAME_FAIL,
  COMPLETE_GAME_SUCCESS,
  COMPLETE_GAME_FAIL,
  CLEAR_GAME,

  //Schedule related
  SCHEDULE_SUCCESS,
  SCHEDULE_FAIL,
  SCHEDULE_CLEAR,
  LOAD_GAMES_SUCCESS,
  LOAD_GAMES_FAIL
} from "./types";

//////////////////////////////////////////////////////////////////////
// game related actions
//////////////////////////////////////////////////////////////////////
//Loading the game
export const loadGame = (id, user) => async dispatch => {
  try {
    //Get the gameinformation from the broadcasts database
    let res = await axios.get(`/api/v1/broadcasts/${id}`);
    const bc = res.data.broadcast;
    let gameOwner = false;
    const sport = bc.sport;
    if (user !== null && bc !== null && user._id === bc.user) gameOwner = true;
    let game = {
      isGameOwner: gameOwner,
      sport: bc.sport,
      gameId: bc.id,
      status: bc.status,
      eventTime: bc.eventTime,
      name: bc.name,
      location: {
        city: bc.location.city,
        state: bc.location.state
      }
    };
    //Get the updates and score from liveupdates database
    //Reverse populate these from broadcasts wasn't sorting correctly
    //so additional database calls are needed to sort them
    let res2 = await axios.get(`/api/v1/liveupdates/${id}`);
    let updates = [];
    if (res2 !== null && res2.data.count > 0) {
      res2.data.data.map(up => {
        let update = {
          scoreboard: up.scoreboard,
          gameUpdate: up.scoreboard.gameUpdate,
          createdAt: up.createdAt,
          _id: up._id
        };
        updates.push(update);
      });
    }
    game.updates = updates;
    let score = {};
    switch (sport) {
      case "hockey":
        let hockey = {};
        res2.data.count > 0
          ? (hockey = {
              score1: updates[0].scoreboard.score1,
              score2: updates[0].scoreboard.score2,
              period: updates[0].scoreboard.period,
              time: {
                minutes: updates[0].scoreboard.time.minutes,
                seconds: updates[0].scoreboard.time.seconds
              }
            })
          : (hockey = {
              score1: 0,
              score2: 0,
              period: 0,
              time: { seconds: 0, minutes: 0 }
            });
        score.hockey = hockey;
        break;
    }
    game.score = score;

    //Get the messages from the liveMessages database
    let res3 = await axios.get(`/api/v1/livemessages/${id}`);
    console.log("messages", res3);
    let messages = [];
    if (res3 !== null && res3.data.count > 0) {
      res3.data.data.map(msg => {
        let message = {
          user: msg.user.name,
          gameMessage: msg.gameMessage,
          createdAt: msg.createdAt,
          _id: msg._id
        };
        messages.push(message);
      });
    }
    game.messages = messages;

    return dispatch({ type: LOAD_GAME_SUCCESS, payload: game });
  } catch (err) {
    return dispatch({ type: LOAD_GAME_FAIL });
  }
};
export const viewEditScoreboard = () => dispatch => {
  return dispatch({ type: VIEW_EDIT_SCOREBOARD });
};
export const noViewEditScoreboard = () => dispatch => {
  return dispatch({ type: NOVIEW_EDIT_SCOREBOARD });
};

// Sets the game status to active
export const activateGame = id => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const status = { status: "active" };
    let res = await axios.put(`/api/v1/broadcasts/${id}`, status, config);

    return dispatch({ type: ACTIVATE_GAME_SUCCESS });
  } catch (err) {
    return dispatch({ type: ACTIVATE_GAME_FAIL });
  }
};

// activateGameUser is called when the user enters a game before it is in progress
export const activateGameUser = () => dispatch => {
  return dispatch({ type: ACTIVATE_GAME_SUCCESS });
};

// Sets the game status to completed
export const completeGame = id => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const status = { status: "completed" };
    let res = await axios.put(`/api/v1/broadcasts/${id}`, status, config);

    return dispatch({ type: COMPLETE_GAME_SUCCESS });
  } catch (err) {
    return dispatch({ type: COMPLETE_GAME_FAIL });
  }
};

export const completeGameUser = () => dispatch => {
  return dispatch({ type: COMPLETE_GAME_SUCCESS });
};

export const openSocketGame = sock => dispatch => {
  try {
    return dispatch({ type: CONNECT_SOCKET_SUCCESS, payload: sock });
  } catch (err) {
    return dispatch({ type: CONNECT_SOCKET_FAIL });
  }
};

export const scoreGame = (up, sport) => async dispatch => {
  try {
    let update = {
      scoreboard: up.scoreboard,
      gameUpdate: up.scoreboard.gameUpdate,
      createdAt: up.createdAt,
      _id: up._id
    };
    let score = {};
    switch (sport) {
      case "hockey":
        let hockey = {
          score1: up.scoreboard.score1,
          score2: up.scoreboard.score2,
          period: up.scoreboard.period,
          time: {
            minutes: up.scoreboard.time.minutes,
            seconds: up.scoreboard.time.seconds
          }
        };
        score.hockey = hockey;
        break;
    }
    const pl = { score, update };
    return dispatch({ type: SCORE_GAME_SUCCESS, payload: pl });
  } catch (err) {
    return dispatch({ type: SCORE_GAME_FAIL });
  }
};

export const messageGame = score => async dispatch => {
  try {
    let message = {
      gameMessage: score.gameMessage,
      createdAt: score.createdAt,
      user: score.user.name,
      _id: score._id
    };
    return dispatch({ type: MESSAGE_GAME_SUCCESS, payload: message });
  } catch (err) {
    return dispatch({ type: MESSAGE_GAME_FAIL });
  }
};

export const clearGame = () => dispatch => {
  dispatch({ type: CLEAR_GAME });
};

//////////////////////////////////////////////////////////////////////
// schedule related actions
//////////////////////////////////////////////////////////////////////
export const scheduleGame = bcastScheduleItem => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      "/api/v1/broadcasts",
      bcastScheduleItem,
      config
    );
    dispatch({
      type: SCHEDULE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SCHEDULE_FAIL,
      payload: err.response.data.error
    });
  }
};

export const getMyGames = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/broadcasts");
    if (res.data.data.length > 0) {
      res.data.data.forEach(item => {
        let nDate = new Date(item.eventTime);
        item.newDate = nDate.toString();
        item.scoreboardUrl = `/game/${item._id}`;
        //item.scoreboardUrl = `/game/${item.eventType}/${item._id}`;
      });
    }

    return dispatch({ type: LOAD_GAMES_SUCCESS, payload: res.data.data });
  } catch (err) {
    console.log(err);
    return dispatch({ type: LOAD_GAMES_FAIL });
  }
};

export const clearGameSchedule = () => dispatch => {
  dispatch({ type: SCHEDULE_CLEAR });
};
