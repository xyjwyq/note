import {combineReducers} from 'redux'
import students from './students'
import counter from './counter'

export default combineReducers({
    students,
    counter
});