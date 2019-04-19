import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as Counter from "./Counter";
import * as App from "./App";

export interface RootState {
  counter: Counter.State;
  app: App.State;
}
export const rootInitialState = {
  counter: Counter.initialState,
  app: App.initialState
};

export const rootReducer = combineReducers({
  counter: Counter.reducer,
  app: App.reducer
});

export const initStore = (initialState = rootInitialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
