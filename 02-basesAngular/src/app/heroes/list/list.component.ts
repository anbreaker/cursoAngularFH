import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = [
    'Captain America',
    'Hulk',
    'Ironman',
    'Spiderman',
    'Thor',
  ];
  heroDelete: string = '';

  deleteHero() {
    this.heroDelete = this.heroes.pop() || '';

    console.log('deleteHero... ' + this.heroDelete);
  }
}
