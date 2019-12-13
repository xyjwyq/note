import { createActions, handleActions, combineActions } from "redux-actions";

export const {
  increase,
  decrease,
  add,
  asyncIncrease,
  asyncDecrease
} = createActions({
  INCREASE: () => 1,
  DECREASE: () => -1,
  ADD: number => number,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null
});

export default handleActions(
  {
    [combineActions(increase, decrease, add)]: (state, { payload }) =>
      state + payload
  },
  10
);
