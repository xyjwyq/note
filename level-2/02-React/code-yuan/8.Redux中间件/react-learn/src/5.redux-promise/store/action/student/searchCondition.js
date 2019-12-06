export const actionTypes = {
    change : 'CHANGE'
}

export function createChangeAction(newCondition) {
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}