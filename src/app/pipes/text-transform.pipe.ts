import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'first-uppercase'})
export class FirstUppercasePipe implements PipeTransform {
  transform(string: string, eachWord: boolean = false): string {
    if(!string) return;

    if(eachWord) {
        return string.toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
    }
    else {
        console.log('f - not',string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase());
        return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
    }
    
  }
}

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {
  transform(string: string): string {
    
    if(!string) return;

    return string.toUpperCase();
  }
}