import {
    SEND_APPLY,
    SEND_APPLY_SUCCESS,
    SEND_APPLY_FAILURE
} from './actionTypes';

export const sendApply = (payload) => {
    return {
        type: SEND_APPLY,
        payload
    }
}

export const sendApplySuccess = (payload) => {
    return {
        type: SEND_APPLY_SUCCESS,
        payload
    }
}

export const sendApplyFailure = (payload) => {
    return {
        type: SEND_APPLY_FAILURE,
        payload
    }
}