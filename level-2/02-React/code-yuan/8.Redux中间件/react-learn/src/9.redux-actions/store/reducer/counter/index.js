import { actionTypes } from "../../action/counter";

export default function(state=0, {type, payload} ) {
    switch(type) {
        case actionTypes.increase:
            return state + 1;
        case actionTypes.decrease:
            return state - 1;
        case actionTypes.add: 
            return state + payload;
        default: 
            return state;
    }
}