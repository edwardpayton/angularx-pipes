import { Pipe, PipeTransform } from '@angular/core';

import { isUndefined } from './utilities/utilities';

@Pipe({
  name: 'filterBy', pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(items: any[], field: string, value = '') {
      if (isUndefined(items)) { return null; };
      if (!value) { return items; };

      let filterBy = value.toLowerCase();

      return filterBy
              ? items.filter(item => item[field].toLowerCase().indexOf(filterBy) !== -1)
              : items;
  }
}
