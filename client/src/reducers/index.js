import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  user: userReducer,
  alert: alertReducer,
  game: gameReducer
});
