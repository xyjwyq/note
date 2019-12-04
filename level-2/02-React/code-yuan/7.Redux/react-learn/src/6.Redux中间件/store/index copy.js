import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer/index";
import { createAddUserAction, createDeleteUserAction } from "./action/user";

const store = createStore(reducer);

let oldDispatch = store.dispatch;

store.dispatch = action => {
  console.log("中间件1");
  console.log("旧数据", store.getState());
  console.log("action", action);

  oldDispatch(action);

  console.log("新数据", store.getState());
  console.log("");
};

 let oldDispatch1 = store.dispatch;

store.dispatch = action => {
  console.log("中间件2");
  console.log("旧数据", store.getState());
  console.log("action", action);

  oldDispatch1(action);

  console.log("新数据", store.getState());
  console.log("");
};


const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction
}

const actions = bindActionCreators(actionCreators, store.dispatch)

actions.addUser({ id: 3, name: "abc", age: 111 })
actions.deleteUser(3)
