import { 
    FirstUppercasePipe,
    CapitalisePipe
 } from './text-transform.pipe';

describe('TextTransform', () => {

    it('should return the string with an uppercase first letter', () => {
        const pipe = new FirstUppercasePipe();

        expect(pipe.transform('hello world')).toEqual('Hello world');
        expect(pipe.transform('hello world', true)).toEqual('Hello World');
        expect(pipe.transform('heLLo WorLD')).toEqual('Hello world');
    });

    it('should return the string in all uppercase', () => {
        const pipe = new CapitalisePipe();

        expect(pipe.transform('hello world')).toEqual('HELLO WORLD');
        expect(pipe.transform('Hello World')).toEqual('HELLO WORLD');
    })

});