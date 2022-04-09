import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'anbreaker';
  nameUpper: string = 'anbreaker';
  nameCap: string = 'anbreaker';

  dateToday: Date = new Date();

  constructor() {}
}
