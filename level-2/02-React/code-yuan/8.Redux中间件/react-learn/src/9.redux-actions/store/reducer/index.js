import students from './student'
// import counter from './counter'
import counter from '../action/counter'
import { combineReducers } from 'redux'

export default combineReducers({
    students,
    counter
});