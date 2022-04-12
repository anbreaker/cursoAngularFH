import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(hero: Hero) {
    return `assets/heroes/${hero.id}.jpg`;
  }
}
