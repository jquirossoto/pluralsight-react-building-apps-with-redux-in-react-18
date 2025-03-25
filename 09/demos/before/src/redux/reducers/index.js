import { combineReducers } from "redux";
import { courseReducer as courses } from "./courseReducer";

export const rootReducer = combineReducers({
  courses
});
