import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Heroe[], sortBy: string = ''): Heroe[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));

      case 'fly':
        return heroes.sort((a, b) => (a.fly > b.fly ? -1 : 1));

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));

      default:
        return heroes;
    }
  }
}
