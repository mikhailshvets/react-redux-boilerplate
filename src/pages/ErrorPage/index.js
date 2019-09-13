import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Text from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/KeyboardArrowLeft'
import { useTheme, withStyles } from '@material-ui/styles'
import { isLoggedIn } from 'containers/user/helpers'
import LinkButton from 'components/Buttons/LinkButton'
import { HOME, DASHBOARD } from 'routes'
import window from 'global'

const GoToDashboardButton = () => (
  <LinkButton variant="contained" color="primary" to="/">
    <ArrowBackIcon style={{ marginRight: useTheme().spacing.unit }} />
    Go now
  </LinkButton>
)

const Wrapper = withStyles({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
})('div')

const ErrorMessage = ({ timeToRetry, children }) => (
  <Wrapper>
    <Text variant="h1" gutterBottom align="center">
      Oops...
      <br />
      An error has occurred
    </Text>
    <Text variant="h6" gutterBottom align="center">
      Something went wrong, the page could not be found or the web server is
      currently unavailable. Redirecting to home page in {timeToRetry}{' '}
      seconds...
    </Text>

    {children}
  </Wrapper>
)

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  timeToRetry: PropTypes.number.isRequired
}

const ErrorPage = ({ retryDelayInSeconds, children, history, location, user }) => {
  const [ timer, setTimer ] = useState(retryDelayInSeconds)

  /** @NOTE: Handle timer */
  useEffect(
    () => {
      const counter = setInterval(() => setTimer(t => t - 1), 1e3)

      return () => clearInterval(counter)
    },
    [ retryDelayInSeconds ]
  )

  /** @NOTE: Handle timeout */
  useEffect(
    () => {
      if (timer > 0) {
        return
      }

      const alreadyInHomePage = [ DASHBOARD, HOME ].includes(location.pathname)
      if (alreadyInHomePage) {
        window.location.reload()
      } else {
        history.push(HOME)
      }
    },
    [ timer ]
  )

  if (isLoggedIn(user)) {
    return (
      <ErrorMessage timeToRetry={timer}>
        <Grid container justify="center">
          {children}
        </Grid>
      </ErrorMessage>
    )
  }

  return (
    <ErrorMessage timeToRetry={timer}>
      <Grid container justify="center">
        {children}
      </Grid>
    </ErrorMessage>
  )
}

ErrorPage.defaultProps = {
  retryDelayInSeconds: 15,
  children: <GoToDashboardButton />
}

ErrorPage.propTypes = {
  children: PropTypes.node,
  retryDelayInSeconds: PropTypes.number,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default withRouter(ErrorPage)
