import { take } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

export default function* () {
  while (true) {
    const action = yield take(actionTypes.asyncIncrease);
    console.log("saga任务运行了", action);
  }
}
