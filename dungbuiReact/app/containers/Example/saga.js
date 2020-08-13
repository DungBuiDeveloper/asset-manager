/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeEvery, fork } from 'redux-saga/effects';

import { CALL_FOLK } from './constants';
import request from 'utils/request';
import { errorEx, folk1, folk2 } from './actions';
import { API_ROOT } from 'containers/App/constants';

/**
 * Github repos request/response handler
 */

const API_1 = 'https://jsonplaceholder.typicode.com/todos/1';
const API_2 = 'https://jsonplaceholder.typicode.com/todos/2';
function* fetchResource(requestURL, option, successAction) {
  const data = yield call(request, requestURL, option);
  yield put(successAction(data));
}
function* fetchAllWithFork() {
  yield fork(fetchResource, API_1, {}, folk1);

  yield fork(fetchResource, API_2, {}, folk2);
}

export function* getFolk() {
  try {
    yield call(fetchAllWithFork);
  } catch (error) {
    yield put(errorEx(error));
  }
}

export default function* getFolkListen() {
  yield takeEvery(CALL_FOLK, getFolk);
}
