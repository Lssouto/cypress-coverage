import { Pipe, PipeTransform } from '@angular/core';
import { ItemEntity } from '../entity/item.entity';

@Pipe({
  name: 'order',
  pure: false,
})
export class OrderPipe implements PipeTransform {

  transform(value: ItemEntity[], orderType: string | undefined): ItemEntity[] {
    if (!value || !orderType) {
      return value;
    }

    if (orderType == 'Default') {
      return value.sort((prev, next) => prev.id - next.id);
    }

    let orderFactor = orderType == 'Asc' ? 1 : -1
    return value.sort((prev, next) => (prev.description).toLowerCase() > (next.description).toLowerCase() ? (1 * orderFactor) : (-1 * orderFactor));
  }

}
