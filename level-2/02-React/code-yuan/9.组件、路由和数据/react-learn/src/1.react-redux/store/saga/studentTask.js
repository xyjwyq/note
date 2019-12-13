import { takeEvery, put, select, call } from "redux-saga/effects";
import { searchStudents } from "../../../services/student";
import {
  fetchStudents,
  setLoading,
  setResult
} from "../action/students/searchStudents";

function* fetchStudentsSaga() {
  yield put(setLoading(true));
  const condition = yield select(state => state.students.condition);
  const res = yield call(searchStudents, condition);
  yield put(setResult(res.datas, res.cont));
  yield put(setLoading(false));
}

export default function* () {
  yield takeEvery(fetchStudents.toString(), fetchStudentsSaga);
  console.log("正在监听fetchStudents");
}
