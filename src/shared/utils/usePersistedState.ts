import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import safelyGetStorageValue from './safelyGetStorageValue'

export type PersistedState<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T, setterFunction?: (value: T) => T): PersistedState<T> {
  const [state, setState] = useState(() =>
    setterFunction && typeof setterFunction === 'function'
      ? setterFunction(safelyGetStorageValue<T>(key, initialState))
      : safelyGetStorageValue<T>(key, initialState)
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
