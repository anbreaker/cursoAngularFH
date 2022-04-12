import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-card-component',
  templateUrl: './hero-card-component.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class HeroCardComponentComponent {
  @Input() hero!: Hero;

  loading: boolean = true;

  constructor() {}

  onLoad() {
    this.loading = false;
  }
}
