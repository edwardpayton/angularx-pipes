import {Pipe, PipeTransform} from '@angular/core';

import { isUndefined, isString, isNull, isObject, isNumber } from './utilities/utilities';

@Pipe({
  name: 'is-undefined'
})
export class IsUndefined implements PipeTransform {

  transform(input: any): boolean {
    return isUndefined(input);
  }
}

@Pipe({
  name: 'is-string'
})
export class IsString implements PipeTransform {

  transform(input: any): boolean {
    return isString(input);
  }
}

@Pipe({
  name: 'is-null'
})
export class IsNull implements PipeTransform {

  transform(input: any): boolean {
    return isNull(input);
  }
}

@Pipe({
  name: 'is-object'
})
export class IsObject implements PipeTransform {

  transform(value: any): boolean {
    return isObject(value);
  }
}

@Pipe({
  name: 'is-number'
})
export class IsNumber implements PipeTransform {

  transform(value: any): boolean {
    return isNumber(value);
  }
}

@Pipe({
  name: 'is-greater-than'
})
export class IsGreaterThan implements PipeTransform {

  transform(num1: number, num2: number): boolean {
    if (!isNumber(num1) || !isNumber(num2)) { return; };

    return num1 > num2;
  }
}

@Pipe({
  name: 'is-less-than'
})
export class IsLessThan implements PipeTransform {

  transform(num1: number, num2: number): boolean {
    if (!isNumber(num1) || !isNumber(num2)) { return; };

    return num1 < num2;
  }
}

