import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
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
  menuItems: MenuItem[] = [
    {
      route: '/maps/fullscreen',
      name: 'FullScreen',
    },
    {
      route: '/maps/bookmarks',
      name: 'Bookmarks',
    },
    {
      route: '/maps/zoom-range',
      name: 'ZoomRange',
    },
    {
      route: '/maps/properties',
      name: 'Properties',
    },
  ];
}
