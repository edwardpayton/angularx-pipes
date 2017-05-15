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
var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (string, length, preserve, suffix) {
        if (preserve === void 0) { preserve = false; }
        if (suffix === void 0) { suffix = '...'; }
        if (utilities_1.isUndefined(length) || length >= string.length) {
            return string;
        }
        ;
        // decide if the result should return whole words or break mid-word
        var resultLength = preserve
            ? (string.indexOf(' ', length) === -1
                ? string.length
                : string.indexOf(' ', length))
            : length;
        return string.substring(0, resultLength) + suffix;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    core_1.Pipe({
        name: 'truncate'
    })
], TruncatePipe);
exports.TruncatePipe = TruncatePipe;
var TrimCharacterPipe = (function () {
    function TrimCharacterPipe() {
    }
    TrimCharacterPipe.prototype.transform = function (string, char) {
        if (char === void 0) { char = ' '; }
        if (!string || utilities_1.isNotString(string)) {
            return;
        }
        ;
        var trimChar = function (haystack, needle) {
            var position = 0;
            var strLen = string.length - 1;
            while (needle.indexOf(haystack[position]) >= 0 && position < strLen) {
                position++;
            }
            ;
            while (needle.indexOf(haystack[strLen]) >= 0 && strLen >= position) {
                strLen--;
            }
            ;
            return haystack.substring(position, strLen + 1);
        };
        return trimChar(string, char);
    };
    return TrimCharacterPipe;
}());
TrimCharacterPipe = __decorate([
    core_1.Pipe({
        name: 'trim-character'
    })
], TrimCharacterPipe);
exports.TrimCharacterPipe = TrimCharacterPipe;
var SplitPipe = (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (string, limit, separator) {
        if (separator === void 0) { separator = ' '; }
        if (!string || utilities_1.isNotString(string)) {
            return;
        }
        ;
        var result = string.split(separator, limit);
        return result.filter(function (v) { return v !== ''; });
    };
    return SplitPipe;
}());
SplitPipe = __decorate([
    core_1.Pipe({
        name: 'split'
    })
], SplitPipe);
exports.SplitPipe = SplitPipe;
var StripTagsPipe = (function () {
    function StripTagsPipe() {
    }
    StripTagsPipe.prototype.transform = function (string) {
        if (!string) {
            return;
        }
        ;
        return string.replace(/<\S[^><]*>/g, '');
    };
    return StripTagsPipe;
}());
StripTagsPipe = __decorate([
    core_1.Pipe({
        name: 'stripTags'
    })
], StripTagsPipe);
exports.StripTagsPipe = StripTagsPipe;
var SlugifyPipe = (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (string) {
        if (!string || utilities_1.isNotString(string)) {
            return;
        }
        ;
        return string
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .trim()
            .replace(/ +/g, '-');
    };
    return SlugifyPipe;
}());
SlugifyPipe = __decorate([
    core_1.Pipe({
        name: 'slugify'
    })
], SlugifyPipe);
exports.SlugifyPipe = SlugifyPipe;
