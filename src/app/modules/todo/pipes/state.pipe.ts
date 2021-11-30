import { Pipe, PipeTransform } from '@angular/core';
import { ItemEntity } from '../entity/item.entity';

@Pipe({
  name: 'state',
  pure: false
})
export class StatePipe implements PipeTransform {

  transform(value: ItemEntity[], state: any): ItemEntity[] {
    if (!value || !state || state == 'All') {
      return value;
    }
    const _state = state != 'Active';
    return value.filter(item => item.isCompleted == _state);
  }

}
