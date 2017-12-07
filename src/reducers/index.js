import { combineReducers } from "redux";
import countings from "./countings";
import timering from "./timering";

const appReducers = combineReducers({
  countings,
  timering
});

export default appReducers;
