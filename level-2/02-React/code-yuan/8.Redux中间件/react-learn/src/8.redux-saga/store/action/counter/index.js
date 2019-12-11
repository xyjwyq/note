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

export function createIncreaseAction() {
  return {
    type: actionTypes.increase
  };
}

export function createDecreaseAction() {
  return {
    type: actionTypes.decrease
  };
}

export function createAsyncIncreaseAction() {
  return {
    type: actionTypes.asyncIncrease
  };
}

export function createAsyncDecreaseAction() {
  return {
    type: actionTypes.asyncDecrease
  };
}

export function createAutoIncreaseAction() {
  return {
    type: actionTypes.autoIncrease
  };
}

export function createAutoDecreaseAction() {
  return {
    type: actionTypes.autoDecrease
  };
}

export function createStopAutoIncreaseAction() {
  return {
    type: actionTypes.stopAutoIncrease
  };
}

export function createAddAction(number) {
  return {
    type: actionTypes.add,
    payload: number
  }
}