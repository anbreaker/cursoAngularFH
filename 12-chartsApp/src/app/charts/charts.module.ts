import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { DonaComponent } from './pages/dona/dona.component';

@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonaHttpComponent,
    ChartBarComponent,
    DonaComponent,
  ],
  imports: [CommonModule, ChartsRoutingModule, NgChartsModule],
})
export class ChartsModule {}
