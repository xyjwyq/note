import { takeEvery, put } from "redux-saga/effects";
import {
  actionTypes,
  createSetLoadingAction,
  createSetResultAction
} from "../action/student/searchResult";
import { searchStudents } from "../../../services/student";

function* fetchStudents() {
  yield put(createSetLoadingAction(true));
  let res = yield searchStudents();
  yield put(createSetResultAction(res.datas, res.cont));
  yield put(createSetLoadingAction(false));
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听fetchStudents");
}
