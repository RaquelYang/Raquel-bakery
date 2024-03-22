import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './inventory-management.model';

@Pipe({
  name: 'sortItems',
  standalone: true
})
export class SortItemsPipe implements PipeTransform {

  transform(value: UserData[]): UserData[] {
    return value
  }

}
