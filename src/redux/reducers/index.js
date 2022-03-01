import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions";
import { initialState } from "../store/index.js";


const mainReducer  = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                count : state.count + 1
            }
        
        case DECREMENT_COUNTER:
            return {
                ...state,
                count : state.count - 1
            }

        default:
            return state
    }
}

export default mainReducer