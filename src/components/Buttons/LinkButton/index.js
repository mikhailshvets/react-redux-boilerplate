import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/Button'

const LinkButton = ({ children, ...props }) => (
  <ButtonBase component={Link} {...props}>
    {children}
  </ButtonBase>
)

LinkButton.propTypes = {
  ...Link.propTypes,
  children: PropTypes.node.isRequired
}

export default LinkButton
