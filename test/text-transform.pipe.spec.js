"use strict";
exports.__esModule = true;
var text_transform_pipe_1 = require("../src/pipes/text-transform.pipe");
describe('TextTransform', function () {
    it('should return the string with an uppercase first letter', function () {
        var pipe = new text_transform_pipe_1.FirstUppercasePipe();
        expect(pipe.transform('hello world')).toEqual('Hello world');
        expect(pipe.transform('hello world', true)).toEqual('Hello World');
        expect(pipe.transform('heLLo WorLD')).toEqual('Hello world');
    });
    it('should return the string in all uppercase', function () {
        var pipe = new text_transform_pipe_1.CapitalisePipe();
        expect(pipe.transform('hello world')).toEqual('HELLO WORLD');
        expect(pipe.transform('Hello World')).toEqual('HELLO WORLD');
    });
});
