import { take, takeEvery, delay, put, fork, cancel } from "redux-saga/effects";
import { actionTypes } from "../action/counter";
import { createIncreaseAction } from "../action/counter";

// takeEvery大致实现原理
// function takeEvery(actionType, saga) {
//   return fork(function*() {
//     const action = yield take(actionType);
//     yield fork(saga);
//   });
// }

let isStop = false; // 是否停止

function* autoIncrease() {
  let task;
  isStop = false;
  if (task) {
    cancel(task);
    console.log("取消之前任务");
  }
  task = yield fork(function*() {
    while (true) {
      yield delay(300);
      if (isStop) {
        break;
      }
      yield put(createIncreaseAction());
    }
  });
}

function stopAutoIncrease() {
  isStop = true;
}

export default function*() {
  yield takeEvery(actionTypes.autoIncrease, autoIncrease);
  yield takeEvery(actionTypes.stopAutoIncrease, stopAutoIncrease);
  console.log("正在监听autoIncrease");
}
