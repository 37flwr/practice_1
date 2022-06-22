import {
    GET_POSITIONS,
    GET_POSITIONS_SUCCESS
} from './actionTypes';

export const getPositions = (payload) => {
    return {
        type: GET_POSITIONS,
        payload
    }
}

export const getPositionsSuccess = (payload) => {
    return {
        type: GET_POSITIONS_SUCCESS,
        payload
    }
}