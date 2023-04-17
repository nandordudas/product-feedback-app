import { isError } from './is'

type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: Error }

export function makeSafe<TArgs extends any[], TReturn>(
  func: (...args: TArgs) => TReturn,
) {
  return (...args: TArgs): Result<TReturn> => {
    try {
      return {
        ok: true,
        value: func(...args),
      }
    }
    catch (error) {
      return {
        error: isError(error) ? error : new Error('Something went wrong', { cause: error }),
        ok: false,
      }
    }
  }
}
