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
var FilterByPipe = (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.transform = function (items, field, value) {
        if (value === void 0) { value = ''; }
        if (utilities_1.isUndefined(items)) {
            return null;
        }
        ;
        if (!value) {
            return items;
        }
        ;
        var filterBy = value.toLowerCase();
        return filterBy
            ? items.filter(function (item) { return item[field].toLowerCase().indexOf(filterBy) !== -1; })
            : items;
    };
    return FilterByPipe;
}());
FilterByPipe = __decorate([
    core_1.Pipe({
        name: 'filterBy', pure: false
    })
], FilterByPipe);
exports.FilterByPipe = FilterByPipe;
