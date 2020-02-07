import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//const initialState = {};

// Set storage to either local or session. Local keeps it stored even after user logs out. Not good
//const storage = "local";
const storage = "session";

const middleware = [thunk];

const saveToStorage = (state, storage) => {
  try {
    const serializedState = JSON.stringify(state);
    storage === "local"
      ? localStorage.setItem("ubroadcastit", serializedState)
      : sessionStorage.setItem("ubroadcastit", serializedState);
  } catch (err) {
    console.log("err", err);
  }
};

const loadFromStorage = storage => {
  try {
    const serializedState =
      storage === "local"
        ? localStorage.getItem("ubroadcastit")
        : sessionStorage.getItem("ubroadcastit");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("err", err);
    return undefined;
  }
};

//const persistedState = loadFromStorage();
const persistedState = loadFromStorage(storage);

const store = createStore(
  rootReducer,
  persistedState,
  //initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToStorage(store.getState(), storage));

export default store;
