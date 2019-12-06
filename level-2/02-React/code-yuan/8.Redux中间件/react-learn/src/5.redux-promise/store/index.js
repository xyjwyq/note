// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "../../3.redux-thunk实现/redux";
import reducer from "./reducer";
// import promise from 'redux-promise'
import promise from '../redux-promise'
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  duration: true
});

export default createStore(reducer, applyMiddleware(promise, logger));
