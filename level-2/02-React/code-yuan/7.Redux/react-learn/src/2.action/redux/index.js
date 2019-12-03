import { createStore, bindActionCreators } from "redux";
import * as actionTypes from "./action/action-type";
import * as numberActions from "./action/number-action";

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.INCREASE:
      return state + 1;
    case actionTypes.DECREASE:
      return state - 1;
    case actionTypes.SET:
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer, 10);

const bindActions = bindActionCreators(numberActions, store.dispatch);

console.log(store.getState());

bindActions.createIncreaseAction();

console.log(store.getState());

bindActions.createSetAction(20);

console.log(store.getState());

bindActions.createDecreaseAction();

console.log(store.getState());


// console.log(store.getState());

// store.dispatch(numberActions.createIncreaseAction());

// console.log(store.getState());

// store.dispatch(numberActions.createSetAction(0));

// console.log(store.getState());

// store.dispatch(numberActions.createDecreaseAction());

// console.log(store.getState());
