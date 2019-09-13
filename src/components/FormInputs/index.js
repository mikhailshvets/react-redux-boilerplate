import React from 'react'
import FormikTextField from './FormikTextField'
import CheckBoxField from './FormikCheckBoxField'

const FormField = props => (
  <FormikTextField
    variant="outlined"
    margin="normal"
    fullWidth
    {...props}
  />
)

const EmailField = props => (
  <FormField
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    {...props}
  />
)

const PasswordField = props => (
  <FormField
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    {...props}
  />
)

export { FormField, EmailField, PasswordField, CheckBoxField }
