import { createActions, handleAction } from "redux-actions";

// function createAction(type, payloadCreator, metaCreator) {
//   return function(...args) {
//     let action = {
//       type
//     };
//     if (typeof payloadCreator === "function") {
//       const payload = payloadCreator(...args);
//       action.payload = payload;
//     }
//     if (typeof metaCreator === "function") {
//       const meta = metaCreator();
//       action.meta = meta;
//     }
//     return action;
//   };
// }

//得到小驼峰命名法
// function toSmallCamel(str) {
//   // ASYNC_INCREASE ->  ["ASYNC", "INCREASE"] -> ["async", "Increase"] -> "asyncIncrease"
//   return str.split("_").map((s, i) => {
//       s = s.toLowerCase();
//       if (i !== 0 && s.length >= 1) {
//           s = s[0].toUpperCase() + s.substr(1);
//       }
//       return s;
//   }).join("")
// }

// function createActions(actionMap) {
//   let res = {};
//   for (const type in actionMap) {
//     const options = actionMap[type];
//     if(Array.isArray(options)) {
//       res[type] = createAction(type, ...options);
//     } else if (typeof options === 'function') {
//       res [type] = createAction(type, options);
//     } else {
//       res[type] = createAction(type);
//     }
//   }
//   return res;
// }

export const actionTypes = {
  increase: "INCREASE",
  decrease: "DECREASE",
  asyncIncrease: "ASYNC_INCREASE",
  asyncDecrease: "ASYNC_DECREASE",
  autoIncrease: "AUTO_INCREASE",
  autoDecrease: "AUTO_DECREASE",
  stopAutoIncrease: "STOP_AUTO_INCREASE",
  add: "ADD"
};

export const {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
  autoIncrease,
  autoDecrease,
  stopAutoIncrease,
  add
} = createActions({
  INCREASE: null,
  DECREASE: null,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null,
  AUTO_INCREASE: null,
  AUTO_DECREASE: null,
  STOP_AUTO_INCREASE: null,
  ADD: number => number
});

