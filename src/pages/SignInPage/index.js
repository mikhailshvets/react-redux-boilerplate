import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signInAction } from 'redux/actions'
import SignInPage from './SignInPage'

function SignIn({ signIn }) {
  return (
    <SignInPage onSubmit={signIn} />
  )
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
}

export default connect(
  null,
  { signIn: signInAction }
)(SignIn)
