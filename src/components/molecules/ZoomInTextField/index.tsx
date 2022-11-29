import CloseIcon from '@mui/icons-material/Close'
import { ClickAwayListener, Grid, IconButton, Zoom } from '@mui/material'
import React, { useCallback, useState } from 'react'
import TextField from '../../../components/atoms/TextField'
import { InputChangeEvent } from '../../../shared/types/inputChangeEvent'
import executeCallbackIfValid from '../../../shared/utils/executeCallbackIfValid'
import typeChecking from '../../../shared/utils/typeChecking'
import Button from '../../atoms/Button'

export interface IZoomInTextField {
  onSubmit: (value: string) => void
  onChange: (value: string) => void
  overrideHideInput?: (value: string) => void
  showTextFieldBtnLabel: string
  submitBtnLabel: string
  value: string
  showInputOnMount?: boolean
}

const ZoomInTextField: React.FC<IZoomInTextField> = ({
  onSubmit,
  onChange,
  overrideHideInput,
  showTextFieldBtnLabel,
  submitBtnLabel,
  value = '',
  showInputOnMount = false,
}) => {
  const [showInput, setShowInput] = useState(showInputOnMount)

  const setValue: InputChangeEvent = (e) => {
    onChange(e.target.value)
  }
  const resetValue = () => {
    onChange('')
  }

  const hideInput = () => {
    if (overrideHideInput && typeChecking.isValidFunction(overrideHideInput)) {
      overrideHideInput(value)
      return
    }
    setShowInput(false)
    resetValue()
  }
  const displayInput = () => {
    setShowInput(true)
  }

  const submit = () => {
    hideInput()
    resetValue()
    executeCallbackIfValid(onSubmit, value)
  }

  const createNewItemOnKeyupEnter: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
    (ev) => {
      if (ev.key === 'Enter') {
        submit()
      }
    },
    [value]
  )

  const onClickAwayFromTextFieldContainer = () => {
    hideInput()
  }

  return (
    <>
      {!showInput && (
        <Zoom in={true}>
          <div>
            <Button fullWidth variant="text" onClick={displayInput}>
              {showTextFieldBtnLabel}
            </Button>
          </div>
        </Zoom>
      )}
      {showInput && (
        <Zoom in={true}>
          <div>
            <ClickAwayListener onClickAway={onClickAwayFromTextFieldContainer}>
              <Grid container gap={1} justifyContent="space-between">
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    multiline
                    rows={4}
                    value={value}
                    onChange={setValue}
                    onKeyDown={createNewItemOnKeyupEnter}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={submit}>
                    {submitBtnLabel}
                  </Button>
                </Grid>
                <Grid item>
                  <IconButton onClick={hideInput}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ClickAwayListener>
          </div>
        </Zoom>
      )}
    </>
  )
}

export default ZoomInTextField
