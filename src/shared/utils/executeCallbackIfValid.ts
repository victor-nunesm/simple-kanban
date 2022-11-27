import typeChecking from './typeChecking'

export default function executeCallbackIfValid(callback: any, arg: any) {
  if (callback && typeChecking.isValidFunction(callback)) {
    callback(arg)
  }
}
