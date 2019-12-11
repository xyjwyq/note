import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import { createLogger } from "redux-logger";
import rootSage from './saga'

const sagaMid = createSagaMiddleware(); // 创建一个saga中间件

const logger = createLogger({
  collapsed: true,
  duration: true
});

const store =  createStore(reducer, applyMiddleware(sagaMid, logger));

sagaMid.run(rootSage); // 启动saga任务

export default store;
