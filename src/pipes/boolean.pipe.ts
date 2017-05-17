import {Pipe, PipeTransform} from '@angular/core';

import { isUndefined, isString, isNull, isObject, isNumber } from './utilities/utilities';

@Pipe({
  name: 'isUndefined'
})
export class IsUndefined implements PipeTransform {

  transform(input: any): boolean {
    return isUndefined(input);
  }
}

@Pipe({
  name: 'isString'
})
export class IsString implements PipeTransform {

  transform(input: any): boolean {
    return isString(input);
  }
}

@Pipe({
  name: 'isNull'
})
export class IsNull implements PipeTransform {

  transform(input: any): boolean {
    return isNull(input);
  }
}

@Pipe({
  name: 'isObject'
})
export class IsObject implements PipeTransform {

  transform(value: any): boolean {
    return isObject(value);
  }
}

@Pipe({
  name: 'isNumber'
})
export class IsNumber implements PipeTransform {

  transform(value: any): boolean {
    return isNumber(value);
  }
}

@Pipe({
  name: 'isGreaterThan'
})
export class IsGreaterThan implements PipeTransform {

  transform(num1: number, num2: number): boolean {
    return num1 > num2;
  }
}

@Pipe({
  name: 'isLessThan'
})
export class IsLessThan implements PipeTransform {

  transform(num1: number, num2: number): boolean {
    return num1 < num2;
  }
}

