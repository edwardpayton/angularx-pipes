import { Pipe, PipeTransform } from '@angular/core';

import { isUndefined } from './utilities/utilities';

@Pipe({
  name: 'filterBy', pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(items: any[], field:string, value:string = '') { 
      if(isUndefined(items)) return null;
      if(!value) return items;
      
      var filterBy = value.toLowerCase();
      
      return filterBy
              ? items.filter(item => item[field].toLowerCase().indexOf(filterBy) != -1)
              : items;
  }
}