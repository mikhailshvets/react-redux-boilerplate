import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { connect } from 'formik'

const FormikSubmitButton = ({ formik: form, ...props }) => {
  const isDisabled = form.isSubmitting || props.disabled

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      {...props}
      type="submit"
      disabled={isDisabled}
    />
  )
}

FormikSubmitButton.propTypes = {
  formik: PropTypes.object.isRequired,
  disabled: PropTypes.bool
}

export const SubmitButton = connect(FormikSubmitButton)
export * from './LinkButton'
