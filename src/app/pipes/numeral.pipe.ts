import { Pipe, PipeTransform } from '@angular/core';

import * as numeral from 'numeral';

@Pipe({
  name: 'numeral'
})
export class NumeralPipe implements PipeTransform {

  transform(value: number, format: string): any {
    if(!value || isNaN(value)) return;

    return numeral(value).format(format);
  }

}
