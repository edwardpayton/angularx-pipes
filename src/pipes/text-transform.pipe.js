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
var FirstUppercasePipe = (function () {
    function FirstUppercasePipe() {
    }
    FirstUppercasePipe.prototype.transform = function (string, eachWord) {
        if (eachWord === void 0) { eachWord = false; }
        if (!string || utilities_1.isNotString(string))
            return;
        if (eachWord) {
            return string.toLowerCase()
                .split(' ')
                .map(function (word) {
                return word[0].toUpperCase() + word.substr(1);
            })
                .join(' ');
        }
        else {
            return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
        }
    };
    return FirstUppercasePipe;
}());
FirstUppercasePipe = __decorate([
    core_1.Pipe({
        name: 'first-uppercase'
    })
], FirstUppercasePipe);
exports.FirstUppercasePipe = FirstUppercasePipe;
var CapitalisePipe = (function () {
    function CapitalisePipe() {
    }
    CapitalisePipe.prototype.transform = function (string) {
        if (!string || utilities_1.isNotString(string)) {
            return;
        }
        ;
        return string.toUpperCase();
    };
    return CapitalisePipe;
}());
CapitalisePipe = __decorate([
    core_1.Pipe({
        name: 'capitalise'
    })
], CapitalisePipe);
exports.CapitalisePipe = CapitalisePipe;
