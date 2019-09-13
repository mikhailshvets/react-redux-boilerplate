import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import MuiText from '@material-ui/core/Typography'

const useTextStyles = makeStyles(({ spacing }) => ({
  root: {
    fontWeight: 400,
    fontSize: '0.725rem',
    lineHeight: 1.85,
    marginRight: ({ last }) => (last ? 0 : spacing(3)),
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '&:hover': { textDecoration: ({ to }) => (to ? 'underline' : 'none') }
  }
}))

const Text = ({ children, to, last }) => {
  const classes = useTextStyles({ to, last })

  return (
    <MuiText
      variant="subtitle1"
      className={classes.root}
      component={to ? Link : undefined}
      to={to}
    >
      {children}
    </MuiText>
  )
}

Text.defaultProps = {
  last: false
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  last: PropTypes.bool
}

export default Text
