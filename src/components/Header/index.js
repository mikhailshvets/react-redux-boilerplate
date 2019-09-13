import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import LinkButton from 'components/Buttons/LinkButton'
import { isLoggedIn } from 'utils/user'

export const HEADER_HEIGHT = 64

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}))

function Header({ user, signOut }) {
  const classes = useStyles()
  const userIsLoggedIn = isLoggedIn(user)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div>
            <LinkButton to="/">Home</LinkButton>
            {userIsLoggedIn ? (<LinkButton to="/protected">Protected</LinkButton>) : null}
          </div>
          {!userIsLoggedIn ?
            <div>
              <LinkButton to="/signin">Sign In</LinkButton>
              <LinkButton to="/signup">Sign Up</LinkButton>
            </div> :
            <LinkButton to="" onClick={signOut}>Sign Out</LinkButton>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func
}

export default Header
