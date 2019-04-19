import { Dispatch, Reducer, DeepPartial } from "redux";
import { BaseAction } from "./utils";

// STATE
export interface State {
  count: number;
}
export const initialState: DeepPartial<State> = {
  count: 0
};

// TYPES

export const actionTypes = {
  INCREMENT: "@counter/INCREMENT",
  DECREMENT: "@counter/DECREMENT"
};

// REDUCERS
export const reducer: Reducer = (
  state: DeepPartial<State> = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// ACTION
export const counterIncrement = (amount: number = 1) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: actionTypes.INCREMENT,
    payload: amount
  });
};
export const counterIncrementAsync = () => async (dispatch: Dispatch) => {
  return await setTimeout(
    () => dispatch({ type: actionTypes.INCREMENT }),
    2000
  );
};
export const counterDecrement = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.DECREMENT });
};
