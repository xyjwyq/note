import { createAction } from 'redux-actions'

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

// function createAction(type, payloadCreator, metaCreator) {
//   return function(...args) {
//     let action = {
//       type
//     }
//     if (typeof payloadCreator === "function") {
//       const payload = payloadCreator(...args);
//       action.payload = payload;
//     } 
//     if (typeof metaCreator === "function") {
//       const meta = metaCreator();
//       action.meta = meta;
//     }
//     return action; 
//   }
// }

export const createIncreaseAction = createAction(actionTypes.increase);
export const createDecreaseAction = createAction(actionTypes.decrease);
export const createAsyncIncreaseAction = createAction(actionTypes.asyncIncrease);
export const createAsyncDecreaseAction = createAction(actionTypes.asyncDecrease);
export const createAutoIncreaseAction = createAction(actionTypes.autoIncrease);
export const createAutoDecreaseAction = createAction(actionTypes.autoDecrease);
export const createStopAutoIncreaseAction = createAction(actionTypes.stopAutoIncrease);
export const createAddAction = createAction(actionTypes.add, number => number, () => ({isAdmin: true}));

// export function createIncreaseAction() {
//   return {
//     type: actionTypes.increase
//   };
// }

// export function createDecreaseAction() {
//   return {
//     type: actionTypes.decrease
//   };
// }

// export function createAsyncIncreaseAction() {
//   return {
//     type: actionTypes.asyncIncrease
//   };
// }

// export function createAsyncDecreaseAction() {
//   return {
//     type: actionTypes.asyncDecrease
//   };
// }

// export function createAutoIncreaseAction() {
//   return {
//     type: actionTypes.autoIncrease
//   };
// }

// export function createAutoDecreaseAction() {
//   return {
//     type: actionTypes.autoDecrease
//   };
// }

// export function createStopAutoIncreaseAction() {
//   return {
//     type: actionTypes.stopAutoIncrease
//   };
// }

// export function createAddAction(number) {
//   return {
//     type: actionTypes.add,
//     payload: number
//   }
// }