import { createAction } from 'redux-act'

export const signUpAction = createAction('SIGN_UP')
export const signUpRequestFailedAction = createAction('SIGN_UP_REQUEST_FAILED')

export const signInAction = createAction('SIGN_IN')
export const userSignIn = createAction('USER_SIGN_IN')
export const signInRequestFailedAction = createAction('SIGN_IN_REQUEST_FAILED')

export const signOutAction = createAction('SIGN_OUT')
export const userSignOut = createAction('USER_SIGN_OUT')

export const testAuthAction = createAction('TEST_AUTH')
export const testAuthRequestFailedAction = createAction('TEST_AUTH_FAILED')
