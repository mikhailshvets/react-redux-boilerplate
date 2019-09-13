import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/styles'
import ErrorPage from 'pages/ErrorPage'
import window from 'global'
import Button from '@material-ui/core/Button'

const ReloadButton = () => (
  <Button
    onClick={() => window.location.reload()}
    variant="contained"
    color="primary"
    style={{ margin: `${useTheme().spacing.unit}px auto` }}
  >
    Reload now
  </Button>
)

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    console.error(error, info)
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    if (process.env.NODE_ENV === 'development') {
      return null
    }

    return (
      <ErrorPage>
        <ReloadButton />
      </ErrorPage>
    )
  }
}

ErrorBoundary.propTypes = { children: PropTypes.node.isRequired }
ErrorBoundary.getDerivedStateFromError = () => ({ hasError: true })

export default ErrorBoundary
