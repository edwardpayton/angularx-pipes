"use strict";
exports.__esModule = true;
var numeral_pipe_1 = require("../src/pipes/numeral.pipe");
describe('NumeralPipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new numeral_pipe_1.NumeralPipe();
    });
    it('create an instance', function () {
        expect(pipe).toBeTruthy();
    });
    it('transforms 10000 to 10,000.0000', function () {
        expect(pipe.transform(10000, '0,0.0000')).toEqual('10,000.0000');
    });
    it('transforms cardinal number to ordinal format', function () {
        expect(pipe.transform(1, '0o')).toEqual('1st');
        expect(pipe.transform(10, '0o')).toEqual('10th');
        expect(pipe.transform(42, '0o')).toEqual('42nd');
    });
    it('transforms number to currency', function () {
        expect(pipe.transform(1000.234, '$0,0.00')).toEqual('$1,000.23');
    });
    it('transforms number to percentage', function () {
        expect(pipe.transform(1, '0%')).toEqual('100%');
        expect(pipe.transform(0.9, '0%')).toEqual('90%');
    });
});
