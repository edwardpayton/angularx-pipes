export function isString(input: any) {
    return typeof input === 'string';
}

export function isNotString(input: any) {
    return !isString(input);
}

export function isUndefined(input: any) {
  return typeof input === 'undefined';
}

export function isDefined(input: any) {
  return !isUndefined(input);
}

export function isNull(input: any) {
  return input === null;
}

export function isNotNull(input: any) {
    return !isNull(input);
}

export function isBoolean(input: any) {
  return typeof input === 'boolean';
}

export function isObject(value: any) {
  return typeof value === 'object';
}

export function isNumber(input: any) {
  return typeof input === 'number';
}
