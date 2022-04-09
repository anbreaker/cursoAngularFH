import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [],
})
export class NumbersComponent {
  netSales: number = 2567789.9951;
  percentage: number = 0.251314;

  constructor() {}
}
