import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { isLoggedIn, userSelector } from 'utils/user'

function ProtectedRoute(props) {
  const user = useSelector(userSelector, shallowEqual)
  const userIsLoggedIn = isLoggedIn(user)

  if (!userIsLoggedIn) {
    return (<Redirect to="/" />)
  }

  return (<Route {...props} />)
}

ProtectedRoute.propTypes = {
  ...Route.propTypes
}

export default ProtectedRoute
