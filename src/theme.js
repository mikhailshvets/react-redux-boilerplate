import { createMuiTheme } from '@material-ui/core/styles'
import window from 'global'

/**
  +---------------------------------------------------------------------------+
  |                              COLOR PALETTES                               |
  +---------------------------------------------------------------------------+
*/

const paletteLight = {
  type: 'light',
  error: {
    light: '#fe8796',
    main: '#fe3851',
    dark: '#cb2c40'
  }
}

const paletteDark = {
  type: 'dark',
  error: {
    light: '#fe8796',
    main: '#fe3851',
    dark: '#cb2c40'
  }
}

/**
  +---------------------------------------------------------------------------+
  |                               TYPOGRAPHY                                  |
  +---------------------------------------------------------------------------+

  @NOTE: 1rem = 16px
  [1]. Material-UI V£ by default uses the older Material design spec for typography
*/

const typography = {
  useNextVariants: true /* [1] */,
  fontFamily: 'Montserrat, sans-serif',
  h1: {
    fontWeight: 800,
    fontSize: '2rem',
    lineHeight: 1.2,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.6rem',
    lineHeight: 1.2
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.4rem',
    lineHeight: 1.2
  },
  h4: {
    fontWeight: 200,
    fontSize: '1.3rem',
    lineHeight: 1.2,
    textTransform: 'uppercase'
  },
  h5: {
    fontWeight: 200,
    fontSize: '1.3rem',
    lineHeight: 1.2
  },
  h6: {
    fontWeight: 700,
    fontSize: '1.2rem',
    lineHeight: 1.2
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: 1.5
  },
  body1: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  body2: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  button: {
    fontWeight: 800,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  caption: {
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: 0.5
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    textTransform: 'uppercase'
  }
}

/**
 +---------------------------------------------------------------------------+
 |                                OVERRIDES                                  |
 +---------------------------------------------------------------------------+*/

/** [1]. Reduce horizontal padding for all table cells */
const overrides = {
  MuiTableCell: {
    root: { padding: '4px 24px 4px 16px' } /* [1] */
  }
}

/**
 +---------------------------------------------------------------------------+
 |                                 THEMES                                    |
 +---------------------------------------------------------------------------+*/

/** @NOTE: We are not using a light theme for the application, only docs. */
const light = createMuiTheme({ palette: paletteLight, typography, overrides })
const dark = createMuiTheme({ palette: paletteDark, typography, overrides })

/** @NOTE: Better DX :) */
if (process.env.NODE_ENV === 'development') {
  window.theme = light
}

export { light, dark }
