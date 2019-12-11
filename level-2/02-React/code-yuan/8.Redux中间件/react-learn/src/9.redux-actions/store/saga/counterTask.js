import { take,race, call, put, delay, fork } from "redux-saga/effects";
import { actionTypes, increase } from "../action/counter";

function* autoTask() {
  while(true) {
    yield take(actionTypes.autoIncrease);
    yield race({
      autoIncrease: call(function* () {
        while(true) {
          yield delay(300);
          yield put(increase());
        }
      }),
      // 该任务，当监控到dispatch "STOP_AUTO_INCREASE" 时，运行后就停止，同时停止其他任务
      cancel: take(actionTypes.stopAutoIncrease)
    });
  }
}

export default function*() {
  yield fork(autoTask);
}
