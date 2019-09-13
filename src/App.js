import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { testAuthAction, signOutAction } from 'redux/actions'

import HomePage from 'pages/HomePage'
import ProtectedPage from 'pages/ProtectedPage'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import NotFoundPage from 'pages/NotFoundPage'
import ProtectedRoute from 'components/ProtectedRoute'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'components/Main'
import BaseStyles from 'components/BaseStyles/BaseStyles'
import { userSelector } from 'utils/user'

import './App.css'

function App({ testAuth, signOut }) {
  useEffect(() => {
    testAuth()
  }, [ testAuth ])

  const user = useSelector(userSelector)

  return (
    <React.Fragment>
      <BaseStyles />
      <Header user={user} signOut={signOut} />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/protected" component={ProtectedPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Main>
      <Footer />
    </React.Fragment>
  )
}

App.propTypes = {
  testAuth: PropTypes.func,
  signOut: PropTypes.func
}

export default connect(
  null,
  { testAuth: testAuthAction, signOut: signOutAction }
)(App)
