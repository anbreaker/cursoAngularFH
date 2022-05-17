import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [],
})
export class DoubleBarsComponent {
  providersLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productsOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y', // 'x' | 'y'
  };

  providersData: ChartData<'bar'> = {
    labels: this.providersLabels,
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Seller A' },
      { data: [50, 250, 30, 450, 200], label: 'Seller B' },
    ],
  };

  productsData: ChartData<'bar'> = {
    labels: this.providersLabels,
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Cars',
        backgroundColor: '#EBDC3D',
      },
    ],
  };
}
