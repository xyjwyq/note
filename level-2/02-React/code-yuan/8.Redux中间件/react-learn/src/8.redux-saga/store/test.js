import store from "./index";
import {
  createAsyncIncreaseAction,
  createAsyncDecreaseAction,
  createDecreaseAction,
  createIncreaseAction,
  createAutoIncreaseAction,
  createAutoDecreaseAction,
  createStopAutoIncreaseAction
} from "./action/counter";
import { createFetchStudentsAction } from "./action/student/searchResult";

window.increase = function() {
  store.dispatch(createIncreaseAction());
};

window.decrease = function() {
  store.dispatch(createDecreaseAction());
};

window.asyncIncrease = function() {
  store.dispatch(createAsyncIncreaseAction());
};

window.asyncDecrease = function() {
  store.dispatch(createAsyncDecreaseAction());
};

window.fetchStudents = function() {
  store.dispatch(createFetchStudentsAction());
};

window.autoIncrease = function(){
  store.dispatch(createAutoIncreaseAction());
}

window.autoDecrease = function() {
  store.dispatch(createAutoDecreaseAction());
}

window.stopAutoIncrease = function() {
  store.dispatch(createStopAutoIncreaseAction());
}