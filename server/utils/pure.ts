
export function isConstructor(constructor: string): boolean {
  return constructor === 'constructor';
}

export function isFunction(fn: any): boolean {
  return typeof fn === 'function';
}