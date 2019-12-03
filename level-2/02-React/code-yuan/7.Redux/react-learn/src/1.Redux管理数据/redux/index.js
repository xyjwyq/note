import {createStore} from "redux";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, 10);

const increaseAction = {
    type: 'increase'
}
const decreaseAction = {
    type: 'decrease'
}

console.log(store);
console.log(store.getState());

store.dispatch(increaseAction);
console.log(store.getState());

store.dispatch(decreaseAction);
store.dispatch(decreaseAction);
store.dispatch(decreaseAction);

console.log(store.getState())
