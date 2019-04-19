import { Action } from "redux";

export interface BaseAction extends Action {
  // tslint:disable-next-line:no-any
  payload?: any;
  // tslint:disable-next-line:no-any
  meta?: any;
}
