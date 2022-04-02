import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor() {}

  new: Character = {
    name: 'Maestro Roshi',
    power: 1000,
  };
}
