import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <h3>The base is {{ base }}</h3>

    <button (click)="addOrSubtract(base)">+{{ base }}</button>

    <span>{{ num }}</span>

    <button (click)="addOrSubtract(-base)">-{{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Counter Angular App';
  public num: number = 10;

  base: number = 5;

  addOrSubtract(value: number): void {
    this.num += value;
  }
}
