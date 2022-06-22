import { put, takeEvery } from 'redux-saga/effects';

import { getPositionsSuccess } from './actions';
import { GET_POSITIONS } from './actionTypes';
import { getPositionsDoc } from '../../utils';

function* getPositionsSaga({ payload }) {
    try {
        const positions = yield getPositionsDoc()
        yield put(getPositionsSuccess(positions));

    } catch (error) {
        console.log(error);
    }
}

function* positionsSaga() {
    yield takeEvery(GET_POSITIONS, getPositionsSaga)
}

export default positionsSaga