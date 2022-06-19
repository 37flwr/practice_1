import {
    GET_USERS,
    GET_USERS_SUCCESS
} from './actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: false,
}

const redactors = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default redactors