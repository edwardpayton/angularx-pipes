"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var utilities_1 = require("./utilities/utilities");
var IsUndefined = (function () {
    function IsUndefined() {
    }
    IsUndefined.prototype.transform = function (input) {
        return utilities_1.isUndefined(input);
    };
    return IsUndefined;
}());
IsUndefined = __decorate([
    core_1.Pipe({
        name: 'is-undefined'
    })
], IsUndefined);
exports.IsUndefined = IsUndefined;
var IsString = (function () {
    function IsString() {
    }
    IsString.prototype.transform = function (input) {
        return utilities_1.isString(input);
    };
    return IsString;
}());
IsString = __decorate([
    core_1.Pipe({
        name: 'is-string'
    })
], IsString);
exports.IsString = IsString;
var IsNull = (function () {
    function IsNull() {
    }
    IsNull.prototype.transform = function (input) {
        return utilities_1.isNull(input);
    };
    return IsNull;
}());
IsNull = __decorate([
    core_1.Pipe({
        name: 'is-null'
    })
], IsNull);
exports.IsNull = IsNull;
var IsObject = (function () {
    function IsObject() {
    }
    IsObject.prototype.transform = function (value) {
        return utilities_1.isObject(value);
    };
    return IsObject;
}());
IsObject = __decorate([
    core_1.Pipe({
        name: 'is-object'
    })
], IsObject);
exports.IsObject = IsObject;
var IsNumber = (function () {
    function IsNumber() {
    }
    IsNumber.prototype.transform = function (value) {
        return utilities_1.isNumber(value);
    };
    return IsNumber;
}());
IsNumber = __decorate([
    core_1.Pipe({
        name: 'is-number'
    })
], IsNumber);
exports.IsNumber = IsNumber;
var IsGreaterThan = (function () {
    function IsGreaterThan() {
    }
    IsGreaterThan.prototype.transform = function (num1, num2) {
        if (!utilities_1.isNumber(num1) || !utilities_1.isNumber(num2)) {
            return;
        }
        ;
        return num1 > num2;
    };
    return IsGreaterThan;
}());
IsGreaterThan = __decorate([
    core_1.Pipe({
        name: 'is-greater-than'
    })
], IsGreaterThan);
exports.IsGreaterThan = IsGreaterThan;
var IsLessThan = (function () {
    function IsLessThan() {
    }
    IsLessThan.prototype.transform = function (num1, num2) {
        if (!utilities_1.isNumber(num1) || !utilities_1.isNumber(num2)) {
            return;
        }
        ;
        return num1 < num2;
    };
    return IsLessThan;
}());
IsLessThan = __decorate([
    core_1.Pipe({
        name: 'is-less-than'
    })
], IsLessThan);
exports.IsLessThan = IsLessThan;
