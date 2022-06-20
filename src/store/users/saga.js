import { put, takeEvery } from 'redux-saga/effects';

import { getUsersSuccess } from './actions';
import { GET_USERS } from './actionTypes';
import { getUsersDoc } from '../../utils';

function* getUsersSaga({ payload }) {
    try {
        const users = yield getUsersDoc(payload)
        yield put(getUsersSuccess(users));

    } catch (error) {
        console.log(error);
    }
}

function* usersSaga() {
    yield takeEvery(GET_USERS, getUsersSaga)
}

export default usersSaga