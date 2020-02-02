import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_PREFERENCES_SUCCESS,
  USER_PREFERENCES_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS
} from "../actions/types";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: null,
  isBroadcaster: null,
  loading: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isBroadcaster: action.payload.isBroadcaster,
        loading: false,
        user: action.payload,
        token: localStorage.getItem("token")
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
        token: action.payload.token
      };
    case USER_PREFERENCES_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_PREFERENCES_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isBroadcaster: null,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
