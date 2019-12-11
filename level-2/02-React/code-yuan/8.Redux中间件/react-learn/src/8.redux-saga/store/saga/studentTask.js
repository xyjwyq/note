import { takeEvery, put, select, cps } from "redux-saga/effects";
import {
  actionTypes,
  createSetLoadingAction,
  createSetResultAction
} from "../action/student/searchResult";

function mockStudents(condition, callback) {
  console.log("mockStudents", condition);
  setTimeout(() => {
    if (Math.random() > 0.5) {
      //nodejs风格
      callback(null, {
        cont: 78,
        datas: [
          { id: 1, name: "abc" },
          { id: 2, name: "bcd" }
        ]
      });
    } else {
      callback(new Error("出错了！！！1"), null);
    }
  }, 3000);
}

function* fetchStudents() {
  //设置为正在加载中
  yield put(createSetLoadingAction(true));
  const condition = yield select(state => state.students.condition);
  // 使用cps
  const resp = yield cps(mockStudents, condition);
  yield put(createSetResultAction(resp.datas, resp.cont));
  yield put(createSetLoadingAction(false));
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听fetchStudents");
}
