function safelyGetStorageValue<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key)

  if (storedValue && storedValue.length > 0 && JSON.parse(storedValue)) {
    return JSON.parse(storedValue) as T
  }

  return defaultValue
}

export default safelyGetStorageValue
