import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styles: [],
})
export class ChartBarComponent implements OnInit {
  ngOnInit(): void {
    this.barChartData = this.barProvidersData;
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  buttonVisible: boolean = true;

  @Input() barProvidersLabels: string[] = [
    // '2021'...
  ];

  @Input() barDatasets: [] = [];
  @Input() barShowButton: boolean = false;

  @Input() barProvidersData: ChartData<'bar'> = {
    labels: this.barProvidersLabels,
    datasets: this.barDatasets,
  };

  barChartType: ChartType = 'bar';
  show: boolean = true;

  public barChartPlugins = [DataLabelsPlugin];

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Seller A' },
      { data: [], label: 'Seller B' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
}
