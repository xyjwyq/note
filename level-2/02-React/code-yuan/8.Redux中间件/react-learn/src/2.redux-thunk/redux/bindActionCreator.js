/**
 * 绑定action创建函数并自动分发
 * @param { Object or function } actionCreators
 * @param {*} dispatch
 */
export default function(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return getAutoDispatchActionCreator(actionCreators, dispatch);
  }
  else if (typeof actionCreators === "object") {
    let autoActions = {};
    for (const props in actionCreators) {
      if (actionCreators.hasOwnProperty(props)) {
        const actionCreator = actionCreators[props];
        if (typeof actionCreator === "function") {
          autoActions[props] = getAutoDispatchActionCreator(
            actionCreator,
            dispatch
          );
        }
      }
    }
    return autoActions;
  } 
  else {
    throw new TypeError(
      "actionCreators must be an object or function which means action creator"
    );
  }
}

function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function(...args) {
    const action = actionCreator(...args);
    dispatch(action);
  };
}
