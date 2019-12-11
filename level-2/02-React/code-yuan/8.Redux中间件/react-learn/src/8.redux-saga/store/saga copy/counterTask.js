import { takeEvery, delay, put } from "redux-saga/effects";
import { actionTypes } from "../action/counter";
import { createIncreaseAction, createDecreaseAction } from "../action/counter";

function* asyncIncrease() {
  yield delay(300);
  yield put(createIncreaseAction());
}
function* asyncDecrease() {
  yield delay(300);
  yield put(createDecreaseAction());
}

export default function*() {
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听asyncIncrease、asyncDecrease")
}
