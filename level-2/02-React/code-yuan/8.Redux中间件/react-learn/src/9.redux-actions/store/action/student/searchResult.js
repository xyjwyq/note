// import { searchStudents } from "../../../../services/student";

// export const actionTypes = {
//   setResult: "SET_RESULT",
//   setLoading: "SET_LOADING",
//   fetchStudents: "FETCH_STUDENTS"
// };

// export function createFetchStudentsAction() {
//   return {
//     type: actionTypes.fetchStudents
//   }
// }

// export function createSetResultAction(arr, total) {
//   return {
//     type: actionTypes.setResult,
//     payload: {
//       datas: arr,
//       total
//     }
//   };
// }

// export function createSetLoadingAction(isLoading) {
//   return {
//     type: actionTypes.setLoading,
//     payload: isLoading
//   };
// }

import { createActions, handleActions, combineActions } from "redux-actions";

export const { setResult, setLoading, fetchStudents } = createActions({
  SET_RESULT: (arr, total) => ({
    datas: arr,
    total
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
    isLoading: false,
    total: 0,
    datas: []
  }
);
// export default handleActions(
//   {
//     [setResult]: (state, { payload }) => ({
//       ...state,
//       ...payload
//     }),
//     [setLoading]: (state, { payload }) => ({
//       ...state,
//       ...payload
//     })
//   },
//   {
//     isLoading: false,
//     total: 0,
//     datas: []
//   }
// );
