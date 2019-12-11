// export const actionTypes = {
//     change : 'CHANGE'
// }

// export function createChangeAction(newCondition) {
//     return {
//         type: actionTypes.change,
//         payload: newCondition
//     }
// }

import { createActions, handleActions } from 'redux-actions'

export const { change } = createActions({
    CHANGE: newCondition => newCondition
});

export default handleActions({
    [change]: (state, {payload}) => ({
        ...state, 
        ...payload
    })
}, {
    key: '',
    sex: -1,
    limit: 10,
    page: 1
});