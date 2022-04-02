import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  constructor(private dbzService: DbzService) {}

  // @Input() characters: Character[] = [];
  get characters(): Character[] {
    // console.log('characters component getter', this.dbzService.characters);

    return this.dbzService.characters;
  }
}
