import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signUpAction } from 'redux/actions'
import SignUpPage from './SignUpPage'

function SignUp({ signUp }) {
  return (
    <SignUpPage onSubmit={signUp} />
  )
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired
}

export default connect(
  null,
  { signUp: signUpAction }
)(SignUp)
