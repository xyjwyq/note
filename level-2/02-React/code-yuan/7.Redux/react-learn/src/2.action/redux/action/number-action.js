import * as actionTypes from './action-type'

export function createIncreaseAction() {
    return {
        type: actionTypes.INCREASE
    }
}

export function createDecreaseAction() {
    return {
        type: actionTypes.DECREASE
    }
}

export function createSetAction(newNum) {
    return {
        type: actionTypes.SET,
        payload: newNum
    }
}