import { actionTypes } from "../../action/student/searchCondition";

const initState = {
  key: "",
  sex: -1,
  limit: 10,
  page: 1
};

export default function(state = initState, { type, payload }) {
  switch (type) {
    case actionTypes.change:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
