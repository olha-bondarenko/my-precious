import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from '../forms/ErrorMessage'

const AppFormField = ({ name, width, ...props }) => {
   const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
        <AppTextInput
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            width={width}
            {...props}
        />
        <ErrorMessage 
          error={errors[name]} 
          visible={touched[name]}/>
    </>
  )
}

export default AppFormField