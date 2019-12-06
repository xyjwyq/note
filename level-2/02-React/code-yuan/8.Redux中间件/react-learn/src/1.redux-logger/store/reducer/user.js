import { actionTypes } from "../action/user";
import uuid from "uuid";

const initialState = {
  isLoading: false,
  datas: [
    { id: uuid(), name: "用户1", age: 11 },
    { id: uuid(), name: "用户2", age: 12 }
  ]
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.addUser:
      return {
        ...state,
        datas: [...state.datas, payload]
      };
    case actionTypes.deleteUser:
      return {
        ...state,
        datas: state.datas.filter(user => user.id !== payload)
      };
    case actionTypes.updateUser:
      return {
        ...state,
        datas: state.datas.map(user =>
          user.id === payload.id
            ? {
                ...user,
                ...payload
              }
            : user
        )
      };
    case actionTypes.setUsers:
      return {
        ...state,
        datas: payload
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
