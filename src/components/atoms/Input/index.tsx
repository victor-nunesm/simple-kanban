import { InputProps } from '@mui/material'
import React from 'react'
import { Omit } from '../../../shared/types/omit'
import executeCallbackIfValid from '../../../shared/utils/executeCallbackIfValid'
import StyledInput from './styles'

export interface IInputProps extends Omit<InputProps, 'ref'> {
  onRef?: (e: HTMLDivElement) => void
}

const Input: React.FC<IInputProps> = ({ onRef, ...inputProps }) => {
  const handleSetRef: IInputProps['onRef'] = (ref) => {
    executeCallbackIfValid(onRef, ref)
  }

  return <StyledInput {...inputProps} ref={handleSetRef} />
}

export default Input
export * as InputStyles from './styles'
