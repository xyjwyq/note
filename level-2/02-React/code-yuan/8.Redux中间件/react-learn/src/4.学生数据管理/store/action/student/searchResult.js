import { searchStudents } from "../../../../services/student";

export const actionTypes = {
  setResult: "SET_RESULT",
  setLoading: "SET_LOADING"
};

export function createSetResultAction(arr, total) {
  return {
    type: actionTypes.setResult,
    payload: {
      datas: arr,
      total
    }
  };
}

export function createSetLoadingAction(isLoading) {
  return {
    type: actionTypes.setLoading,
    payload: isLoading
  };
}

export function fetchStudent() {
  return async function(dispatch, getState) {
    dispatch(createSetLoadingAction(true));
    const condition = getState().students.condition;
    const res = await searchStudents(condition);
    dispatch(createSetResultAction(res.datas, res.cont));
    dispatch(createSetLoadingAction(false));
  };
}
