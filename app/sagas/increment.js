import { takeLatest, select, put } from 'redux-saga/effects';

import * as incrementActions from '../actions/increment';

export function* incrementValue() {
  const state = yield select(state => state);
  const { increment } = state;

  const updatedValue = increment + 1;
  yield put(incrementActions.updateValue(updatedValue));
}

export function* decrementValue() {
  const state = yield select(state => state);
  const { increment } = state;

  const updatedValue = increment - 1;
  yield put(incrementActions.updateValue(updatedValue));
}

export function* watchIncrementSaga() {
  yield takeLatest(incrementActions.INCREMENT_VALUE, incrementValue);

  yield takeLatest(incrementActions.DECREMENT_VALUE, decrementValue);
}
