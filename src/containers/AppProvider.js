import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import * as appTheme from 'theme'

const AppProvider = ({ children, theme, store, persistor, history }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>
          {children}
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
)

AppProvider.defaultProps = {
  theme: appTheme.light
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default AppProvider
