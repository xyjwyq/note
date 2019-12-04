import { actionTypes } from "../action/loginUser";

const initialState = null;

export default function loginUserReducer(state = initialState, {type, payload}) {
    switch (type) {
        case actionTypes.setLoginUser:
            return payload;
        default:
            return state;
    }
}
