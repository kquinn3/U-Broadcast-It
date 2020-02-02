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
  LOAD_GAMES_FAIL,
  LOAD_MY_GAMES_SUCCESS,
  LOAD_MY_GAMES_FAIL,
  LOAD_FAVORITE_GAMES_SUCCESS,
  LOAD_FAVORITE_GAMES_FAIL,
  LOAD_DEFAULT_GAMES_SUCCESS,
  LOAD_DEFAULT_GAMES_FAIL
} from "../actions/types";

const initialState = {
  //Game related state
  isGameLoaded: false,
  isGameOwner: false,
  isViewEditScoreboard: false,
  sport: "",
  gameId: "",
  status: "",
  socket: null,
  updates: [],
  messages: [],
  name: { team1: "", team2: "" },
  location: { city: null, state: null },
  eventTime: null,

  //Scheduling state
  isGameScheduled: false,
  gamesScheduled: [],
  gamesMyScheduled: [],
  gamesDefaultScheduled: [],
  gamesFavoriteScheduled: [],

  //Error
  error: null,

  //Specific sports
  score: {
    hockey: {
      score1: 0,
      score2: 0,
      period: 0,
      time: { seconds: 0, minutes: 0 }
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Game related states
    case LOAD_GAME_SUCCESS:
      return {
        ...state,
        isGameLoaded: true,
        isGameOwner: action.payload.isGameOwner,
        sport: action.payload.sport,
        gameId: action.payload.gameId,
        status: action.payload.status,
        name: action.payload.name,
        location: action.payload.location,
        eventTime: action.payload.eventTime,
        updates: action.payload.updates,
        score: action.payload.score,
        messages: action.payload.messages,
        isViewEditScoreboard: false
      };
    case SCORE_GAME_SUCCESS:
      return {
        ...state,
        score: action.payload.score,
        updates: [action.payload.update, ...state.updates]
      };
    case VIEW_EDIT_SCOREBOARD:
      return {
        ...state,
        isViewEditScoreboard: true
      };
    case NOVIEW_EDIT_SCOREBOARD:
      return {
        ...state,
        isViewEditScoreboard: false
      };
    case ACTIVATE_GAME_SUCCESS:
      return {
        ...state,
        status: "active"
      };
    case COMPLETE_GAME_SUCCESS:
      return {
        ...state,
        status: "completed"
      };
    case CONNECT_SOCKET_SUCCESS:
      return {
        ...state,
        socket: action.payload
      };
    case CONNECT_SOCKET_FAIL:
      return {
        ...state,
        socket: null
      };

    case MESSAGE_GAME_SUCCESS:
      return {
        ...state,
        messages: [action.payload, ...state.messages]
      };
    case MESSAGE_GAME_FAIL:
    case SCORE_GAME_FAIL:
      return {
        ...state
      };
    case COMPLETE_GAME_FAIL:
    case ACTIVATE_GAME_FAIL:
    case CLEAR_GAME:
    case LOAD_GAME_FAIL:
      return {
        ...state,
        isGameLoaded: false,
        isGameOwner: false,
        gameInfo: null,
        sport: "",
        gameId: "",
        // socket: null,
        updates: [],
        messages: [],
        score: {
          hockey: {
            score1: 0,
            score2: 0,
            period: 0,
            time: { seconds: 0, minutes: 0 }
          }
        },
        status: "scheduled",
        isViewEditScoreboard: false
      };

    // Scheduling states. Probably should use a different reducer and state object
    case SCHEDULE_SUCCESS:
      return {
        ...state,
        isGameScheduled: true
      };
    case SCHEDULE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case LOAD_GAMES_SUCCESS:
      return {
        ...state,
        gamesScheduled: action.payload
      };
    case LOAD_MY_GAMES_SUCCESS:
      return {
        ...state,
        gamesMyScheduled: action.payload
      };
    case LOAD_DEFAULT_GAMES_SUCCESS:
      return {
        ...state,
        gamesDefaultScheduled: action.payload
      };
    case LOAD_FAVORITE_GAMES_SUCCESS:
      return {
        ...state,
        gamesFavoriteScheduled: action.payload
      };
    case LOAD_DEFAULT_GAMES_FAIL:
    case LOAD_MY_GAMES_FAIL:
    case LOAD_FAVORITE_GAMES_FAIL:
    case LOAD_GAMES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case SCHEDULE_CLEAR:
      return {
        ...state,
        isGameScheduled: false,
        error: null
      };
    default:
      return state;
  }
};
