import { put, takeEvery } from 'redux-saga/effects';

import { sendApplyFailure, sendApplySuccess } from './actions';
import { SEND_APPLY } from './actionTypes';
import { sendApplyDoc } from '../../utils';

function* sendApplySaga({ payload }) {
    try {
        const apply = yield sendApplyDoc(payload)
        yield put(sendApplySuccess(apply));

    } catch (error) {
        yield put(sendApplyFailure(error))
    }
}

function* applySaga() {
    yield takeEvery(SEND_APPLY, sendApplySaga)
}

export default applySaga