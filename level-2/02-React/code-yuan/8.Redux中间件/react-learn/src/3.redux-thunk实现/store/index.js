import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
import thunk from '../redux-thunk'

const logger = createLogger({
  collapsed: true,
  duration: true
});

export default createStore(reducer, applyMiddleware(thunk, logger));
