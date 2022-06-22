import {
    GET_POSITIONS,
    GET_POSITIONS_SUCCESS
} from './actionTypes';

const initialState = {
    positions: [],
    loading: false,
    error: false,
}

const redactors = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSITIONS:
            return {
                ...state,
                loading: true
            }
        case GET_POSITIONS_SUCCESS:
            return {
                ...state,
                positions: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default redactors