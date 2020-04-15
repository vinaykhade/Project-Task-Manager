import { all, fork } from 'redux-saga/effects';

import { watchIncrementSaga } from './increment';

export default function* rootSaga() {
  yield all([
    // add other watchers to the array
    fork(watchIncrementSaga),
  ]);
}
