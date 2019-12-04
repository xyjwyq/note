/**
 * 得到一个指定长度的随机字符串
 * @param {*} len
 */
function getRandomString(len) {
  return Math.random()
    .toString(36)
    .substr(2, len)
    .split("")
    .join(".");
}

/**
 * 判断某个对象是否是一个plain-object
 * @param {*} obj
 */
function isPlainObject(obj) {
  return (
    typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype
  );
}

export default function createStore(reducer, defaultState, enhanced) {

   //enhanced表示applyMiddleware返回的函数
  if (typeof defaultState === "function") {
    //第二个参数是应用中间件的函数返回值
    enhanced = defaultState;
    defaultState = undefined;
  }

  if (typeof enhanced === "function") {
    //进入applyMiddleWare的处理逻辑
    return enhanced(createStore)(reducer, defaultState);
  }

  let currentState = defaultState,
    currentReducer = reducer,
    subscribes = [];

  function dispatch(action) {
    /**
     * 判断action
     * 1. action必须是一个plain-object
     * 2. 必须有type属性
     */

    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }

    if (action.type === undefined) {
      throw new TypeError("action must have a property of type");
    }

    currentState = currentReducer(currentState, action);

    subscribes.forEach(fn => {
      fn();
    });
  }

  function getState() {
    return currentState;
  }

  function subscribe(fn) {
    subscribes.push(fn);
    return function() {
      const index = subscribes.indexOf(fn);
      if (index !== -1) {
        subscribes.splice(index, 1);
      }
    };
  }

  // 创建仓库时，需要分发一次初始的action
  dispatch({
    type: `@@redux/INIT${getRandomString(7)}`
  });

  return {
    dispatch,
    getState,
    subscribe
  };
}
