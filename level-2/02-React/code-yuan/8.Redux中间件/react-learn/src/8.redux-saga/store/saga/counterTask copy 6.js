import { take, cancelled, delay, put, fork, cancel } from "redux-saga/effects";
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

/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoIncrease() {
  let task;
  while (true) {
    yield take(actionTypes.autoIncrease);
    task = yield fork(function*() {
      try {
        while (true) {
          yield delay(1000);
          yield put(createIncreaseAction());
        }
      } finally {
        if (yield cancelled()) {
          console.log("自动增加任务被取消掉了！！！");
        }
      }
    });
    yield take(actionTypes.stopAutoIncrease);
    yield* stopAutoIncrease(task);
  }
}

function* stopAutoIncrease(task) {
  yield* stopTask(task);
}

export default function*() {
  yield fork(autoIncrease);
  console.log("正在监听autoIncrease");
}
