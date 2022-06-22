import {
    SEND_APPLY,
    SEND_APPLY_SUCCESS
} from './actionTypes';

const initialState = {
    loading: false,
    error: false,
}

const redactors = (state = initialState, action) => {
    switch(action.type) {
        case SEND_APPLY:
            return {
                ...state,
                loading: true
            }
        case SEND_APPLY_SUCCESS:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default redactors