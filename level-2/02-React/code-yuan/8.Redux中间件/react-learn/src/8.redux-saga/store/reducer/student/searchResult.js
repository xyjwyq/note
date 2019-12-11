import { actionTypes } from "../../action/student/searchResult";

const initState = {
  isLoading: false,
  total: 0,
  datas: []
};

export default function(state = initState, { type, payload }) {
  switch (type) {
    case actionTypes.setResult:
      return {
        ...state,
        ...payload
      };
    case actionTypes.setLoading:
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state;
  }
}
