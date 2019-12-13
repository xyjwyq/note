import React from "react";
import App from "./App";
import dva from "dva";
import counter from "./models/counter";
import students from "./models/students";
import routerConfig from "./routerConfig";
import { createBrowserHistory } from "history";
import createLoading from 'dva-loading'

const testMid = store => next => action => {
  console.log("testMid1");
  next(action);
};

// 得到一个dva对象
const app = dva({
  history: createBrowserHistory(),
  initialState: {
    counter: 30,
    students: {
      total: 0,
      datas: [
        {
          id: 1,
          name: "test",
          age: 18
        }
      ]
    }
  },
  // onRrrr(err, dispatch) {
  //     console.log(err.message, dispatch);
  // },
  // onAction: [testMid],
  // onStateChange(state) {
  //     console.log("状态变化", state.counter);
  // },
  // onReducer(reducer) {
  //     return function (state, action) {

  //     }
  // }
//   onEffect(oldEffect, sagaEffects, model, actionType) {
//     return function*(action) {
//       console.log("即将执行副作用代码");
//       yield oldEffect(action);
//       console.log("副作用代码执行完毕");
//     };
//   },
  extraReducers: {
    abc(state = 123, action) {
      return state;
    },
    bcd(state = 456, action) {
      return state;
    }
  },
  extraEnhancers: [
    function(createStore) {
      return function(...args) {
        console.log("即将创建仓库1");
        return createStore(...args);
      };
    },
    function(createStore) {
      return function(...args) {
        console.log("即将创建仓库2");
        return createStore(...args);
      };
    }
  ]
});

app.use(createLoading());

//在启动之前定义模型
app.model(counter);
app.model(students);

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(routerConfig);

app.start("#root");

//得到一个dva对象
