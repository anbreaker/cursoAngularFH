import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: "Angular's pipe",
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Dates and Text',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          { label: 'Numbers', icon: 'pi pi-euro', routerLink: 'numbers' },
          {
            label: 'Not Commons',
            icon: 'pi pi-globe',
            routerLink: 'not-commons',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        routerLink: 'sorts',
      },
    ];
  }
}
