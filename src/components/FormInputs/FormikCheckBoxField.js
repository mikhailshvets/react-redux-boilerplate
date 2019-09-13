import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Field } from 'formik'
import { isEmpty, get, isNil } from 'lodash'

/* :: (object, object, object) -> object */
export const getCheckBoxFieldProps = ({ shouldSave, ...props }, formikFieldProps, formikForm) => {
  const { name } = props
  const fieldError = get(formikForm.errors, name)
  const showError = get(formikForm.touched, name) === true && !isEmpty(fieldError)
  const control = props.control || (<Checkbox value="allowExtraEmails" color="primary" />)

  const checkboxFieldProps = {
    ...props,
    ...formikFieldProps,
    control,
    value: isNil(formikFieldProps.value) ? '' : formikFieldProps.value,
    id: props.id || props.name,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: formikForm.isSubmitting || props.disabled,
    onChange(...args) {
      if (shouldSave(args)) {
        formikFieldProps.onChange(...args)
      }
      props.onChange(...args)
    }
  }

  return checkboxFieldProps
}

const FormikCheckBoxField = props => (
  <Field name={props.name}>
    {({ field, form }) => (
      <FormControlLabel {...getCheckBoxFieldProps(props, field, form)} />
    )}
  </Field>
)

FormikCheckBoxField.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  shouldSave: () => true
}

FormikCheckBoxField.propTypes = {
  ...FormControlLabel.propTypes,
  name: PropTypes.string.isRequired,
  shouldSave: PropTypes.func
}

export default FormikCheckBoxField
