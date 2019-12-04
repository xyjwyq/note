import { actionTypes } from "../action/user";
import uuid from "uuid";

const initialState = [
  { id: uuid(), name: "用户1", age: 11 },
  { id: uuid(), name: "用户2", age: 12 }
];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.addUser:
      return [...state, payload];
    // return state.concat(payload);
    case actionTypes.deleteUser:
      return state.filter(user => user.id !== payload);
    case actionTypes.updateUser:
      return state.map(user =>
        user.id === payload.id
          ? {
              ...user,
              ...payload
            }
          : user
      );
    default:
      return state;
  }
}
