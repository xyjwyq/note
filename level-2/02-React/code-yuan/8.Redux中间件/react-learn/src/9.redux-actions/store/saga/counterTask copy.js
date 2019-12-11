import { takeEvery, take, delay, put, fork, cancel } from "redux-saga/effects";
import { actionTypes } from "../action/counter";
import { createIncreaseAction, createDecreaseAction } from "../action/counter";

function* asyncIncrease() {
  let task;
  while (true) {
    // 若action不是"ASYNC_INCREASE"，则一直阻塞，不往下面运行
    yield take(actionTypes.asyncIncrease);
    //监听到了action，并且在开启新任务之前，取消之前的任务
    if (task) {
      yield cancel(task);
      console.log("之前的任务被取消掉了");
    }
    task = yield fork(function*() {
      yield delay(300);
      yield put(createIncreaseAction());
    });
  }
}

function* asyncDecrease() {
  yield delay(300);
  yield put(createDecreaseAction());
}

export default function*() {
  yield fork(asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听asyncIncrease、asyncDecrease");
}
