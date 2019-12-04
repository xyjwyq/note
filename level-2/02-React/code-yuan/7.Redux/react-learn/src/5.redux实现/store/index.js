// import {createStore} from 'redux'
import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer/index";
import { createAddUserAction, createUpdateUserAction } from "./action/user";
import uuid from "uuid";

const store = createStore(reducer);

const autoActions = bindActionCreators(
  {
    createAddUserAction,
    createUpdateUserAction
  },
  store.dispatch
);

autoActions.createAddUserAction({
  id: uuid(),
  name: "test",
  age: 88
});

console.log(store.getState());

// const unListen = store.subscribe(() => {
//     // 函数运行时间点：在分发一个action之后，会运行注册的监听器，
//     console.log('触发');
// });

// store.dispatch(createAddUserAction({
//     id: uuid(),
//     name: 'test',
//     age: 88
// }));

// console.log(store.getState());

// unListen();

// store.dispatch(createAddUserAction({
//     id: uuid(),
//     name: 'aaaa',
//     age: 22222
// }));

// console.log(store.getState());
