import { put, takeEvery } from 'redux-saga/effects';

import { sendApplySuccess } from './actions';
import { SEND_APPLY } from './actionTypes';
import { sendApplyDoc } from '../../utils';

function* sendApplySaga({ payload }) {
    try {
        yield sendApplyDoc(payload)
        yield put(sendApplySuccess());

    } catch (error) {
        console.log(error);
    }
}

function* applySaga() {
    yield takeEvery(SEND_APPLY, sendApplySaga)
}

export default applySaga