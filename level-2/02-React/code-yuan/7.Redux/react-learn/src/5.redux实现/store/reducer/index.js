// import { combineReducers } from "redux";
import { combineReducers } from "../../redux/";
import loginUser from "./loginUser";
import user from "./user";


// function myCombineReducers(reducers) {
//   return function(state, action) {
//     let newState = { ...state };
//     for (let key in reducers) {
//       const reducer = reducers[key];
//       newState[key] = reducer(newState[key], action);
//     }
//     return newState;
//   };
// }

// export default combineReducers({
//   loginUser,
//   user
// });

export default combineReducers({
  login:loginUser,
  user:user
});
