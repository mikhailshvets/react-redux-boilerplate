import {
  put,
  call,
  all,
  takeLatest,
  takeEvery,
  select
} from 'redux-saga/effects'
import { replace } from 'connected-react-router'

import * as api from './api'
import * as actions from '../actions'

const getToken = state => state.auth.user.token

function* signIn({ payload }) {
  try {
    yield put(actions.userSignIn({ user: { email: payload.email, token: true } }))
    yield call(testAuth)
  } catch (error) {
    yield put(actions.signInRequestFailedAction())
  }
}

function* signUp({ payload }) {
  try {
    yield put(actions.userSignIn({ user: { email: payload.email, token: true } }))
    yield call(testAuth)
  } catch (error) {
    yield put(actions.signUpRequestFailedAction())
  }
}

function* signOut() {
  yield put(actions.userSignOut())
  yield put(replace('/protected'))
}

function* testAuth() {
  try {
    const accessToken = yield call(setAccessTokenToHeader)

    if (accessToken) {
      yield put(actions.userSignIn({ accessToken }))
      yield put(replace('/protected'))
    }
  } catch (error) {
    yield put(actions.testAuthRequestFailedAction())
  }
}

function* setAccessTokenToHeader() {
  const token = yield select(getToken)

  yield call(api.setAuthToken, token)

  return token
}

export default function* authSagas() {
  yield all([
    takeLatest(actions.signInAction, signIn),
    takeLatest(actions.signUpAction, signUp),
    takeLatest(actions.signOutAction, signOut),
    takeEvery(actions.testAuthAction, testAuth)
  ])
}
