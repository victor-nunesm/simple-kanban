class TypeChecking {
  public isValidFunction(fn: any) {
    return fn && typeof fn === 'function' ? true : false
  }

  public isValidArray(array: any[], mustBeFilled = false) {
    const isArray = Array.isArray(array)
    if (!isArray || (isArray && mustBeFilled && array.length === 0)) {
      return false
    }

    return true
  }
}

export default new TypeChecking()
