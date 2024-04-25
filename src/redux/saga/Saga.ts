import * as actionTypes from '../actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getDatas } from './Api';

const actionData = function (type: string, payload?: any) {
  return { type, payload };
};

export const getDataSaga = function* () {
  yield put(actionData(actionTypes.FETCH_START, true));
  try {
    const { results } = yield call(getDatas);
    yield put(actionData(actionTypes.SET_DATA, results));
    yield put(actionData(actionTypes.FETCH_END, false));
  } catch (error) {
    if (error instanceof Error) {
      yield put(actionData(actionTypes.DATA_ERROR));
    } else console.log('Unexpected error', error);

    yield put(actionData(actionTypes.FETCH_END, false));
  }
};

const Saga = function* () {
  yield takeLatest(actionTypes.DATA_REQUEST, getDataSaga);
};
export default Saga;
