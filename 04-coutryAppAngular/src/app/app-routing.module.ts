import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerCapitalComponent } from './country/pages/per-capital/per-capital.component';
import { PerCountryComponent } from './country/pages/per-country/per-country.component';
import { PerRegionComponent } from './country/pages/per-region/per-region.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [
  {
    path: '',
    component: PerCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PerRegionComponent,
  },
  {
    path: 'capital',
    component: PerCapitalComponent,
  },
  {
    path: 'country/:id',
    component: ShowCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
