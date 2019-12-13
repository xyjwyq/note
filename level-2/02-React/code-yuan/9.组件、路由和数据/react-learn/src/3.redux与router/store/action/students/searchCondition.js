import { createAction, handleActions } from "redux-actions";

export const change = createAction("CHANGE", newCondition => newCondition);

export default handleActions(
  {
    [change]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  {
    key: "",
    sex: -1,
    limit: 10,
    page: 1
  }
);
