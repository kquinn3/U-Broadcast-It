import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS
} from "./types";

export const registerUser = formData => async dispatch => {
  const output = await regUser(formData, dispatch);
  output.type === "REGISTER_SUCCESS" && (await loadUser(dispatch));
};

export const regUser = async (formData, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/auth/register", formData, config);

    return dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    return dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.error
    });
  }
};

//Login User

export const loginUser = formData => async dispatch => {
  console.log(formData);
  const output = await logUser(formData, dispatch);
  console.log(output);
  output.type === "LOGIN_SUCCESS" && (await loadUser(dispatch));
};

export const logUser = async (formData, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/auth/login", formData, config);
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    return dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.error
    });
  }
};

export const loadUser = async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/v1/auth/me");
    return dispatch({ type: USER_LOADED, payload: res.data.data });
  } catch (err) {
    return dispatch({ type: AUTH_ERROR });
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT, payload: "Thank you for visiting" });
};

// Clear Errors
export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
