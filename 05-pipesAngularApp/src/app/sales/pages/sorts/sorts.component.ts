import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styles: [],
})
export class SortsComponent {
  sortBy: string = '';

  onCapital: boolean = true;

  heroes: Heroe[] = [
    { name: 'Ironman', fly: true, color: Color.red },
    { name: 'Thor', fly: true, color: Color.red },
    { name: 'Spiderman', fly: false, color: Color.blue },
    { name: 'Hulk', fly: false, color: Color.green },
  ];

  constructor() {}

  changeCapital() {
    this.onCapital = !this.onCapital;
  }

  changeSort(value: string) {
    this.sortBy = value;
    console.log(value);
  }
}
