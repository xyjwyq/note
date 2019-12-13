import { createActions, handleActions, combineActions } from "redux-actions";

export const { setResult, setLoading, fetchStudents } = createActions({
  SET_RESULT: (stuArr, total) => ({
    total,
    datas: stuArr
  }),
  SET_LOADING: isLoading => isLoading,
  FETCH_STUDENTS: null
});

export default handleActions(
  {
    [combineActions(setResult, setLoading)]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  {
    total: 0,
    isLoading: false,
    datas: []
  }
);
