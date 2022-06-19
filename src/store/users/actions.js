import {
    GET_USERS,
    GET_USERS_SUCCESS
} from './actionTypes';

export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const getUsersSuccess = (payload) => {
    return {
        type: GET_USERS_SUCCESS,
        payload
    }
}