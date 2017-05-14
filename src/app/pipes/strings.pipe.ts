import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(string: string, length?: any, preserve: boolean = false, suffix: string = '...'): string {
    if(typeof(length) === 'undefined' || length >= string.length) return string;

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
    name: 'trim-character'
})
export class TrimCharacterPipe implements PipeTransform {

  transform(string: string, char: string = ' '): string {
    if(!string) return;

    let trimChar = (haystack, needle) => {
      let position = 0;
      let strLen = string.length -1;

      while(needle.indexOf(haystack[position]) >= 0 && position < strLen) position++;
      while(needle.indexOf(haystack[strLen]) >= 0 && strLen >= position) strLen--;

      return haystack.substring(position, strLen +1);
    };

    return trimChar(string, char);
  }
}

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(string: string, limit?: number, separator: string = ' '): Array<string> {
    if(!string) return;

    let result = string.split(separator, limit);

    return result.filter((v) => v != '');
  }
}

@Pipe({
  name: 'stripTags'
})
export class StripTagsPipe implements PipeTransform {
  
  transform(string: string): string {
    if (!string) return;
    
    return string.replace(/<\S[^><]*>/g, '');
  }
}

@Pipe({ 
    name: 'slugify' 
})
export class SlugifyPipe implements PipeTransform {

  transform(string: string): string {

    if (!string) return;
    
    return string
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .trim()
            .replace(/ +/g,'-')
  }
}
