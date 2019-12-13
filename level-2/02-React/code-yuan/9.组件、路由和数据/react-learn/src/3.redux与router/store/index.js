import { createStore, applyMiddleware } from "redux";
import reducer from "./action";
import rootSaga from "./saga";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import history from "./history";

const logger = createLogger({
  collapsed: true,
  duration: true
});

const sagaMiddleware = createSagaMiddleware();

const routerMid = routerMiddleware(history);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMid, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
