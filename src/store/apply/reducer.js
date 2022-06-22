import {
    SEND_APPLY,
    SEND_APPLY_SUCCESS,
    SEND_APPLY_FAILURE
} from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    formSent: false,
    response: '',
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
                loading: false,
                formSent: true,
                response: action.payload,
            }
        case SEND_APPLY_FAILURE:
            return {
                ...state,
                loading: false,
                formSent: false,
                response: action.payload,
            }
        default:
            return state
    }
}

export default redactors