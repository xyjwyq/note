import { take, takeEvery, delay, put, fork, cancel } from "redux-saga/effects";
import { actionTypes, createIncreaseAction } from "../action/counter";

// takeEvery大致实现原理
// function takeEvery(actionType, saga) {
//   return fork(function*() {
//     const action = yield take(actionType);
//     yield fork(saga);
//   });
// }

function* stopTask(task) {
  if (task) {
    yield cancel(task);
  }
}

let task;

function* autoIncrease() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    yield* stopTask(task);
    task = yield fork(function*() {
      while (true) {
        yield delay(1000);
        yield put(createIncreaseAction());
      }
    });
  }
}

function* stopAutoIncrease() {
  yield* stopTask(task);
}

export default function*() {
  yield fork(autoIncrease);
  yield takeEvery(actionTypes.stopAutoIncrease, stopAutoIncrease);
  console.log("正在监听autoIncrease");
}
