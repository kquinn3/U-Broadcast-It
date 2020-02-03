import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//const initialState = {};

const middleware = [thunk];

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("ubroadcastit", serializedState);
  } catch (err) {
    console.log("err", err);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("ubroadcastit");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("err", err);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  //initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
