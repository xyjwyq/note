import { takeEvery, put, call,select } from "redux-saga/effects";
import {
  actionTypes,
  createSetLoadingAction,
  createSetResultAction
} from "../action/student/searchResult";
import {createChangeAction} from '../action/student/searchCondition'
import { searchStudents } from "../../../services/student";

function* fetchStudents() {
  yield put(createSetLoadingAction(true));
  yield put(createChangeAction({
      key: '1',
      sex: 0
  }));
  const condition = yield select(state => state.students.condition);
  let res = yield call(searchStudents, condition);
  yield put(createSetResultAction(res.datas, res.cont));
  yield put(createSetLoadingAction(false));
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听fetchStudents");
}
