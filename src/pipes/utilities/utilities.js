"use strict";
exports.__esModule = true;
function isString(input) {
    return typeof input === 'string';
}
exports.isString = isString;
function isNotString(input) {
    return !isString(input);
}
exports.isNotString = isNotString;
function isUndefined(input) {
    return typeof input === 'undefined';
}
exports.isUndefined = isUndefined;
function isDefined(input) {
    return !isUndefined(input);
}
exports.isDefined = isDefined;
function isNull(input) {
    return input === null;
}
exports.isNull = isNull;
function isNotNull(input) {
    return !isNull(input);
}
exports.isNotNull = isNotNull;
function isBoolean(input) {
    return typeof input === 'boolean';
}
exports.isBoolean = isBoolean;
function isObject(value) {
    return typeof value === 'object';
}
exports.isObject = isObject;
function isNumber(input) {
    return typeof input === 'number';
}
exports.isNumber = isNumber;
