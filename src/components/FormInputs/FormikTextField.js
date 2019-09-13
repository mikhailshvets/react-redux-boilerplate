import React from 'react'
import PropTypes from 'prop-types'
import MuiTextField from '@material-ui/core/TextField'
import { Field } from 'formik'
import { isEmpty, get, isNil, merge } from 'lodash'

const inputLabelProps = {
  style: { fontSize: '0.96rem' }
}

/* :: (object, object, object) -> object */
export const getTextFieldProps = ({ shouldSave, ...props }, formikFieldProps, formikForm) => {
  const { name, type } = props
  const fieldError = get(formikForm.errors, name)
  const showError = get(formikForm.touched, name) === true && !isEmpty(fieldError)

  const inputProps = [ 'email', 'password' ].includes(type)
    ? {
      ...props.inputProps,
      spellCheck: false,
      autoCapitalize: 'none',
      autoCorrect: 'off'
    }
    : props.inputProps

  const InputLabelProps = merge(props.InputLabelProps, inputLabelProps)

  const textFieldProps = {
    ...props,
    ...formikFieldProps,
    inputProps,
    InputLabelProps,
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
    },
    onBlur(...args) {
      formikFieldProps.onBlur(...args)
      props.onBlur(...args)
    }
  }

  return textFieldProps
}

const FormikTextField = props => (
  <Field name={props.name}>
    {({ field, form }) => (
      <MuiTextField {...getTextFieldProps(props, field, form)} />
    )}
  </Field>
)

FormikTextField.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  shouldSave: () => true
}

FormikTextField.propTypes = {
  ...MuiTextField.propTypes,
  name: PropTypes.string.isRequired,
  shouldSave: PropTypes.func
}

export default FormikTextField
