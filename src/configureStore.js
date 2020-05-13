import { createStore, applyMiddleware } from "redux";
import reducers from "./_reducers";
import reduxThunk from "redux-thunk";
import { loadState } from "./localStorage";

export default () => {
  const persistedState = loadState();
  const middlewares = [reduxThunk];

  return createStore(reducers, persistedState, applyMiddleware(...middlewares));
};
