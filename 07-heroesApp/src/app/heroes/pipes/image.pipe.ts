import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'image',
  pure: false, // Only to rerender change of pipes
})
export class ImagePipe implements PipeTransform {
  transform(hero: Hero) {
    if (!hero.id && !hero.alter_img) {
      return `assets/no-image.png`;
    }

    if (hero.alter_img) {
      return hero.alter_img;
    }

    return `assets/heroes/${hero.id}.jpg`;
  }
}
