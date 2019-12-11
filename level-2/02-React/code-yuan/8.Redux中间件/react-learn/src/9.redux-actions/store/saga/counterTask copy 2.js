import { take, delay, put, fork, cancel } from "redux-saga/effects";
import { actionTypes } from "../action/counter";
import { createIncreaseAction } from "../action/counter";

// takeEvery大致实现原理
// function takeEvery(actionType, saga) {
//   return fork(function*() {
//     const action = yield take(actionType);
//     yield fork(saga);
//   });
// }

function* autoIncrease() {
  let task;
  while (true) {
    const action = yield take(actionTypes.autoIncrease);
    console.log(action);
    if (task) {
      cancel(task);
      console.log("之前任务已取消");
    }
    task = yield fork(function*() {
      yield delay(300);
      yield put(createIncreaseAction());
    });
  }
}

export default function*() {
  yield fork(autoIncrease);
  console.log("正在监听autoIncrease");
}
