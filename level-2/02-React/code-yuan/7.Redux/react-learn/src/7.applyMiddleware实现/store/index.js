// import { createStore, bindActionCreators, applyMiddleware } from "redux";
import { createStore, bindActionCreators, applyMiddleware } from "../redux";
import reducer from "./reducer/index";
import { createAddUserAction, createDeleteUserAction } from "./action/user";

const store = createStore(reducer, applyMiddleware(logger1, logger2));

function logger1(store) {
  return function(next) {
    return function dispatch(action) {
      console.log("中间件1");
      console.log("旧数据", store.getState());
      console.log("action", action);

      next(action);

      console.log("新数据", store.getState());
      console.log("");
    };
  };
}

function logger2(store) {
  return function(next) {
    return function dispatch(action) {
      console.log("中间件2");
      console.log("旧数据", store.getState());
      console.log("action", action);

      next(action);

      console.log("新数据", store.getState());
      console.log("");
    };
  };
}

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction
};

const actions = bindActionCreators(actionCreators, store.dispatch);

actions.addUser({ id: 3, name: "abc", age: 111 });
actions.deleteUser(3);
