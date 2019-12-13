import {createStore, applyMiddleware} from 'redux'
import reducer from './action'
import rootSaga from './saga'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger({
    collapsed: true,
    duration: true
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga);

export default store;