import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [],
})
export class NotCommonComponent {
  name: string = 'anbreaker';
  gender: string = 'male';

  // i18nSelect
  invitationMap = {
    female: 'girl',
    male: 'boy',
  };

  // i18nPlural
  clients: string[] = ['anbreaker', 'Magalí', 'Jéssica', 'Anaquin', 'Curro'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    other: `tenemos # cliente esperando`,
  };

  constructor() {}

  changeClient() {
    this.gender === 'male' ? (this.gender = 'female') : (this.gender = 'male');
  }

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = { name: 'anbreaker', age: 36, city: 'Bdj' };

  // Json Pipe
  heroes = [
    { name: 'Ironman', fly: true },
    { name: 'Spiderman', fly: false },
    { name: 'Hulk', fly: false },
  ];

  // Async Pipe
  myObservable = interval(1000); //0,1,2,3...

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });
}
