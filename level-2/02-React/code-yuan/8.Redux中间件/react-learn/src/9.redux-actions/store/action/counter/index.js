import { createActions, handleActions } from "redux-actions";

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

export default handleActions(
  {
    [increase]: state => state + 1,
    [decrease]: state => state - 1,
    [add]: (state, { payload }) => state + payload
  },
  0
);
