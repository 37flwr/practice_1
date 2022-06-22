import {
    SEND_APPLY,
    SEND_APPLY_SUCCESS
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