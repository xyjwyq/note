import isPlainObject from "./utils/isPlainObject";
import randomActionType from "./utils/getRandomActionType";

function validateReducers(reducers) {
  if (!isPlainObject(reducers)) {
    throw new TypeError("reducers must be a plain object");
  }

  for (const prop in reducers) {
    if (reducers.hasOwnProperty(prop)) {
      const reducer = reducers[prop];
      let state = reducer(undefined, {
        type: randomActionType.INIT
      });
      if (state === undefined) {
        throw new TypeError("reducers must not return undefined");
      }
      state = reducer(undefined, {
        type: randomActionType.UNKNOWN
      });
      if (state === undefined) {
        throw new TypeError("reducers must not return undefined");
      }
    }
  }
}

export default reducers => {
  //1. 验证
  validateReducers(reducers);

  /**
   * 返回的是一个reducer函数
   */
  return (state = {}, action) => {
    const newState = {};
    for (const prop in reducers) {
      if (reducers.hasOwnProperty(prop)) {
        const reducer = reducers[prop];
        newState[prop] = reducer(state[prop], action);
      }
    }
    return newState;
  };
};
