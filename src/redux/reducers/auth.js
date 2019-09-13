import { createReducer } from 'redux-act'
import { userSignIn, userSignOut } from '../actions'

const initialState = {
  user: {
    email: null,
    token: false
  }
}

const authReducer = createReducer(
  {
    [userSignIn]: (state, payload) => ({
      ...state,
      user: { ...state.user, ...payload.user }
    }),
    [userSignOut]: () => ({
      ...initialState,
      user: { ...initialState.user }
    })
  },
  initialState
)

export default authReducer
