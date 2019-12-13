import store from "./store";
import {
  increase,
  decrease,
  add,
  asyncIncrease,
  asyncDecrease
} from "./store/action/counter";
import { change } from "./store/action/students/searchCondition";
import { fetchStudents } from "./store/action/students/searchStudents";

window.increase = function() {
  store.dispatch(increase());
};

window.decrease = function() {
  store.dispatch(decrease());
};

window.add = function() {
  store.dispatch(add(10));
};

window.asyncIncrease = function() {
  store.dispatch(asyncIncrease());
};

window.asyncDecrease = function() {
  store.dispatch(asyncDecrease());
};

window.change = function() {
  store.dispatch(change());
};

window.fetchStudents = function() {
  store.dispatch(fetchStudents());
};
