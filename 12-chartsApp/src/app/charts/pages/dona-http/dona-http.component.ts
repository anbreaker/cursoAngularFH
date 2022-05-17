import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss'],
})
export class DonaHttpComponent implements OnInit {
  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.chartsService
      .getSocialNetworksUsersForDona()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: this.doughnutChartColors,
            },
          ],
        };
        console.log(labels, values);
      });
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartDataValues: number[] = [];
  // prettier-ignore
  public doughnutChartColors: string[] = ['#3b5998', '#d6249f', '#65C3C9', '#00A884', '#c4302b'];

  users: number[] = [350, 450, 100, 200, 300];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
