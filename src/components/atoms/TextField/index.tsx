import { TextFieldProps } from '@mui/material'
import React from 'react'
import { Omit } from '../../../shared/types/omit'
import executeCallbackIfValid from '../../../shared/utils/executeCallbackIfValid'
import StyledTextField from './styles'

export interface ITextFieldProps extends Omit<TextFieldProps, 'ref' | 'error'> {
  onRef?: (e: HTMLDivElement) => void
  error?: string
}

export type TextFieldChangeEvent = React.ChangeEvent<HTMLInputElement>

const TextField: React.FC<ITextFieldProps> = ({ onRef, onChange, error, value = '', ...inputProps }) => {
  const errorIsValid = typeof error === 'string' && error.length > 0

  const handleOnChange = (e: TextFieldChangeEvent) => {
    executeCallbackIfValid(onChange, e)
  }

  const handleSetRef = (ref: HTMLDivElement) => {
    executeCallbackIfValid(onRef, ref)
  }

  return (
    <StyledTextField
      {...inputProps}
      value={value}
      error={errorIsValid}
      helperText={errorIsValid ? error : undefined}
      ref={handleSetRef}
      onChange={handleOnChange}
    />
  )
}

export default TextField
export * as TextFieldStyles from './styles'
