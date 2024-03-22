import { Pipe, PipeTransform } from '@angular/core';
import { SearchForm, UserData } from './inventory-management.model';

@Pipe({
  name: 'sortItems',
  standalone: true
})
export class SortItemsPipe implements PipeTransform {

  transform(value: UserData[], filterCondition: SearchForm): UserData[] {
    console.log('filterCondition', filterCondition);
    return value
  }

}
