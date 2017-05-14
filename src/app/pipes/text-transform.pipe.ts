import {Pipe, PipeTransform} from '@angular/core';

import { isNotString } from './utilities/utilities';

@Pipe({
  name: 'first-uppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(string: string, eachWord: boolean = false): string {
    if(!string || isNotString(string)) return;

    if(eachWord) {
        return string.toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
    }
    else {
        return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
    }
    
  }
}

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(string: string): string {
    if(!string || isNotString(string)) return;

    return string.toUpperCase();
  }
}