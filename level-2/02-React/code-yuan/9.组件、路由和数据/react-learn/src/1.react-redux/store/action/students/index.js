import { combineReducers } from "redux";
import searchCondition from "./searchCondition";
import searchStudents from "./searchStudents";

export default combineReducers({
  condition: searchCondition,
  result: searchStudents
});
