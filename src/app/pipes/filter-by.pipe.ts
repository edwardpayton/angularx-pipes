import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy', pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(items: any[], field:string, value:string = '') { 
      if(items === undefined) return null;
      if(!value) return items;
      
      var filterBy = value.toLowerCase();
      
      return filterBy
              ? items.filter(item => item[field].toLowerCase().indexOf(filterBy) != -1)
              : items;
  }
}