import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";

export default function*() {
  yield all([counterTask(), studentTask()]);
}
