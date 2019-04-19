import { Store } from "redux";
import { RootState } from "./store";
import { NextContext } from "next";

export interface AppContext extends NextContext {
  isServer?: boolean;
  store?: Store<RootState>;
}
