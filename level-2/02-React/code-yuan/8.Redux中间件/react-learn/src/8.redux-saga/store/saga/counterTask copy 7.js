import { race, call } from "redux-saga/effects";
import { createIncreaseAction, createDecreaseAction } from "../action/counter";

function asyncAction() {
  const duration = Math.floor(Math.random() * 4000 + 1000);
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(createIncreaseAction());
      } else {
        resolve(createDecreaseAction());
      }
    }, duration);
  });
}

export default function*() {
  const res = yield race({
    action1: call(asyncAction),
    action2: call(asyncAction)
  });
  console.log(res);
}
