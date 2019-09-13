import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import { HEADER_HEIGHT } from 'components/Header'
import { FOOTER_HEIGHT } from 'components/Footer'

export const PADDING_X_UNIT = 3
export const PADDING_Y_UNIT = 3

const Wrapper = styled('main')(({ theme: { spacing } }) => ({
  position: 'relative',
  display: 'block',
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
  overflow: 'auto',
  padding: spacing(PADDING_X_UNIT)
}))

const Main = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
