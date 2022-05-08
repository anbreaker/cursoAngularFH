import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent } from './pages/bars/bars.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bars', component: BarsComponent },
      { path: 'double-bars', component: DoubleBarsComponent },
      { path: 'dona', component: DonaComponent },
      { path: 'dona-http', component: DonaHttpComponent },
      { path: '**', redirectTo: 'bars' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
