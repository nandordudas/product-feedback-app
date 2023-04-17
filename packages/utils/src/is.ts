type Constructor<T = void> = new (...args: any[]) => T

export function isInstance<T extends Constructor<any>>(value: any, ctor: T): value is InstanceType<T> {
  return value instanceof ctor
}

export function isError<T extends Error>(value: any): value is T {
  return isInstance(value, Error)
}

export function isFunction<T extends Function>(value: any): value is T {
  return typeof value === 'function'
}

export function isAsyncFunction<T extends Function>(value: any): value is T {
  if (!isFunction(value))
    return false

  return value[Symbol.toStringTag] === 'AsyncFunction'
}
