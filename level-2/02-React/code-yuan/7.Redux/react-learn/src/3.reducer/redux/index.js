import {createStore} from 'redux'
import reducer from './reducer/index'
import {createAddUserAction} from './action/user'
import uuid from 'uuid'


const store = createStore(reducer);

console.log(store.getState());

store.dispatch(createAddUserAction({
    id: uuid(),
    name: 'test',
    age: 88
}));

console.log(store.getState());