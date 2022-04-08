import { Component } from '@angular/core';

import { Country } from '../../interfaces/countries-interfaces';
import { CountryService } from '../../services/contry.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [],
})
export class PerRegionComponent {
  regions: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ];
  activeRegion: string = '';

  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClassCss(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) return;

    this.activeRegion = region;

    this.countries = [];

    this.countryService
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
