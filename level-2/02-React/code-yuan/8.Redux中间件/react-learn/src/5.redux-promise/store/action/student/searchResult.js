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

// export function fetchStudent() {
//   return async function(dispatch, getState) {
//     dispatch(createSetLoadingAction(true));
//     const condition = getState().students.condition;
//     const res = await searchStudents(condition);
//     dispatch(createSetResultAction(res.datas, res.cont));
//     dispatch(createSetLoadingAction(false));
//   };
// }

// export function fetchStudent() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const action = createSetResultAction(
//         [
//           { id: 1, name: "aaa" },
//           { id: 2, name: "bbb" }
//         ],
//         2
//       );
//       resolve(action);
//     }, 3000);
//   });
// }

export async function fetchStudent(condition) {
  const res = await searchStudents(condition);
  return createSetResultAction(res.datas, res.cont);
}

// export function fetchStudent(condition) {
//   return {
//     type: actionTypes.setResult,
//     payload: searchStudents(condition).then(resp => ({
//       datas: resp.datas,
//       total: resp.cont
//     }))
//   };
// }
