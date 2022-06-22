import { all, fork } from 'redux-saga/effects';

import usersSaga from './users/saga'
import applySaga from './apply/saga';
import positionsSaga from './positions/saga';

export default function* rootSaga() {
    yield all([
        // users
        fork(usersSaga),

        //apply
        fork(applySaga),

        //positions
        fork(positionsSaga),
    ])
}