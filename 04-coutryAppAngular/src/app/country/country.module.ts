import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { TableCountryComponent } from './components/table-country/table-country.component';
import { InputCountryComponent } from './components/input-country/input-country.component';

@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ShowCountryComponent,
    TableCountryComponent,
    InputCountryComponent,
  ],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ShowCountryComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CountryModule {}
