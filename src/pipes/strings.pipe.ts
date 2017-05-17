import {Pipe, PipeTransform} from '@angular/core';

import { isUndefined, isNotString } from './utilities/utilities';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(string: string, length?: any, preserve = false, suffix = '...'): string {
    if (isUndefined(length) || length >= string.length) { return string; };

    // decide if the result should return whole words or break mid-word
    let resultLength = preserve
                            ? (string.indexOf(' ', length) === -1
                                ? string.length
                                : string.indexOf(' ', length))
                            : length;

    return string.substring(0, resultLength) + suffix;
  }
}

@Pipe({
    name: 'trimCharacter'
})
export class TrimCharacterPipe implements PipeTransform {

  transform(string: string, char = ' '): string {
    if (!string || isNotString(string)) { return string; };

    let trimChar = (haystack: string, needle: string) => {
      let position = 0;
      let strLen = string.length - 1;

      while (needle.indexOf(haystack[position]) >= 0 && position < strLen) { position++; };
      while (needle.indexOf(haystack[strLen]) >= 0 && strLen >= position) { strLen--; };

      return haystack.substring(position, strLen + 1);
    };

    return trimChar(string, char);
  }
}

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(string: string, limit?: number, separator = ' '): any {
    if (!string || isNotString(string)) { return string; };

    let result = string.split(separator, limit);

    return result.filter((v) => v !== '');
  }
}

@Pipe({
  name: 'stripTags'
})
export class StripTagsPipe implements PipeTransform {

  transform(string: string): string {
    if (!string) { return string; };

    return string.replace(/<\S[^><]*>/g, '');
  }
}

@Pipe({
    name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  transform(string: string): string {

    if (!string || isNotString(string)) { return string; };

    return string
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .trim()
            .replace(/ +/g, '-');
  }
}

@Pipe({
  name: 'obscure'
})
export class ObscurePipe implements PipeTransform {

  transform(string: string, show = false): string {

    if (!string || isNotString(string)) { return string; };

    let hiddenString = new Array(string.length + 1).join('*');

    return show
            ? string
            : hiddenString;
  }
}