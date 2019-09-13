'use strict'
const { warn, off, error } = require('./constants')

/**
 [1]. `eslint-plugin-react` complains if this is not set.
 [2]. Conflicting with Prettier so must be turned off.
 [3]. We won't be using JSDoc in this react project.
 [4]. For consistency disallow function declarations.
 */
const config = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],

  plugins: [
    'react'
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },

  globals: {
    artifacts: true,
    console: true,
    contract: true,
    context: true,
    fetch: true,
    process: true,
    URL: true
  },

  rules: {
    'jsx-quotes': [ error, 'prefer-double' ],   
    'react/forbid-prop-types': [ error, { forbid: [ 'any' ] } ],
    'no-multiple-empty-lines': [ error, { max: 1 } ],
    'react/jsx-boolean-value': [ off ],
    'react/jsx-indent': [ warn, 2 ],
    'react/jsx-indent-props': [ warn, 2 ],
    'react/jsx-pascal-case': error,
    'react/jsx-tag-spacing': [ error, { 'beforeSelfClosing': 'always' } ],
    'react/sort-comp': [ error, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'props',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'state',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    } ],
    'react/no-did-mount-set-state': error,
    'react/no-did-update-set-state': error,
    'react/no-unused-prop-types': warn,
    'react/no-multi-comp': [ warn, { ignoreStateless: true } ],
    'react/prefer-stateless-function': [ error, { ignorePureComponents: true } ],
    'array-bracket-spacing': [ error, 'always' ],
    'array-callback-return': warn,
    'block-spacing': [ error,  'always' ],
    'brace-style': [ error, '1tbs', { allowSingleLine: false } ],
    'comma-dangle': [ warn, 'never' ],
    'comma-spacing': error,
    'comma-style': error,
    'computed-property-spacing': [ error, 'never' ],
    'consistent-this': [ error, 'self' ],
    'curly': [ error, 'all' ],
    'eol-last': [ error, 'always' ],
    'eqeqeq': [ error, 'always', { null: 'ignore' } ],
    'for-direction': error,
    'func-call-spacing': [ error, 'never' ],
    'indent': [ error, 2, { SwitchCase: 1 } ],
    'key-spacing': error,
    'keyword-spacing': error,
    'max-len': off,
    'new-cap': error,
    'no-buffer-constructor': error,
    'no-console': off,
    'no-constant-condition': [ error, { checkLoops: false } ],
    'no-lonely-if': error,
    'no-loop-func': error,
    'no-mixed-operators': error,
    'no-mixed-spaces-and-tabs': error,
    'no-multi-spaces': error,
    'no-new-require': error,
    'no-param-reassign': [ error, { props: false } ],
    'no-path-concat': error,
    'no-return-assign': error,
    'no-self-compare': error,
    'no-shadow': error,
    'no-tabs': error,
    'no-throw-literal': error,
    'no-trailing-spaces': error,
    'no-undefined': off,
    'no-unneeded-ternary': [ error, { defaultAssignment: false } ],
    'no-use-before-define': [ error, { functions: false, classes: true } ],
    'no-useless-constructor': error,
    'object-curly-spacing': [ error, 'always' ],
    'prefer-const': warn,
    'prefer-rest-params': error,
    'prefer-spread': error,
    'quotes': [ error, 'single' ],
    'semi': [ error, 'never' ],
    'space-before-blocks': error,
    'space-before-function-paren': [ error, { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
    'space-in-parens': [ error, 'never' ],
    'space-infix-ops': error,
    'space-unary-ops': error,
    'spaced-comment': [ error, 'always', { "markers": [ ":", "::" ] } ],
    'yoda': [ error, 'never', { exceptRange: true } ]
  },
  settings: {
    react: {
      version: '16.9.0' /* [1] */
    }
  }
}

module.exports = config
