import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  constructor() {}

  menu: MenuItem[] = [
    { route: '/charts/bars', text: 'Bars' },
    { route: '/charts/double-bars', text: 'Double-bars' },
    { route: '/charts/dona', text: 'Dona' },
    { route: '/charts/dona-http', text: 'Dona-http' },
  ];
}
