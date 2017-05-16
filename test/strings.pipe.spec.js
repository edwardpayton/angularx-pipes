"use strict";
exports.__esModule = true;
var strings_pipe_1 = require("../src/pipes/strings.pipe");
describe('TextTransform', function () {
    var longString = 'a long string';
    // TruncatePipe
    it('should return the input unmodified', function () {
        var pipe = new strings_pipe_1.TruncatePipe();
        expect(pipe.transform("" + longString)).toEqual("" + longString);
    });
    it('should break mid word', function () {
        var pipe = new strings_pipe_1.TruncatePipe();
        expect(pipe.transform("" + longString, 4, false)).toEqual('a lo...');
    });
    it('should break at the end of the word', function () {
        var pipe = new strings_pipe_1.TruncatePipe();
        expect(pipe.transform("" + longString, 4, true)).toEqual('a long...');
    });
    // TrimCharacterPipe
    it('should trim the whitespace', function () {
        var pipe = new strings_pipe_1.TrimCharacterPipe();
        expect(pipe.transform(" " + longString + "     ")).toEqual('a long string');
        expect(pipe.transform(longString + "!", '!')).toEqual('a long string');
        expect(pipe.transform(" " + longString + "  ", 'a ')).toEqual('long string');
    });
    // SplitPipe
    it('should return a string split into an array', function () {
        var pipe = new strings_pipe_1.SplitPipe();
        expect(pipe.transform("" + longString)).toEqual(['a', 'long', 'string']);
    });
    it('should return a array of strings with a maximum length', function () {
        var pipe = new strings_pipe_1.SplitPipe();
        expect(pipe.transform("" + longString, 2)).toEqual(['a', 'long']);
    });
    it('should return a array of strings removing a specific character', function () {
        var pipe = new strings_pipe_1.SplitPipe();
        expect(pipe.transform('banana', -1, 'a')).toEqual(['b', 'n', 'n']);
    });
    // StripTagsPipe
    it('should return a string without html tags', function () {
        var pipe = new strings_pipe_1.StripTagsPipe();
        expect(pipe.transform('<p>String with tags.</p>')).toEqual('String with tags.');
        expect(pipe.transform('<p some-attr="attr">String with attr.</p>')).toEqual('String with attr.');
        expect(pipe.transform('<img src="img/path" />')).toEqual('');
    });
    // SlugifyPipe
    it('should slugify the string', function () {
        var pipe = new strings_pipe_1.SlugifyPipe();
        expect(pipe.transform("" + longString)).toEqual('a-long-string');
        expect(pipe.transform('String with CAPS & +-/*')).toEqual('string-with-caps');
    });
    it('should hide the string', function () {
        var pipe = new strings_pipe_1.ObscurePipe();
        expect(pipe.transform("" + longString)).toEqual('*************');
    });
});
