import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Form } from 'formik'

import FormProvider from './FormProvider'
import { SubmitButton } from 'components/Buttons'
import { FormField, EmailField, PasswordField, CheckBoxField } from 'components/FormInputs'

import useStyles from 'constants/styles'

function SignUp({ onSubmit }) {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormProvider onSubmit={onSubmit}>
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormField
                  autoComplete="firstName"
                  name="firstName"
                  required
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <EmailField />
              </Grid>
              <Grid item xs={12}>
                <PasswordField />
              </Grid>
              <Grid item xs={12}>
                <CheckBoxField
                  name="agreement"
                  label="Agreement"
                />
              </Grid>
            </Grid>
            <SubmitButton className={classes.submit}>Sign Up</SubmitButton>
            <Grid container justify="flex-start">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Form>
        </FormProvider>
      </div>
    </Container>
  )
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignUp
