import { Component, Input } from '@angular/core';

import { Capital } from '../../interfaces/capitals-interfaces';
import { Country } from '../../interfaces/countries-interfaces';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: [],
})
export class TableCountryComponent {
  @Input() items: Country[] | Capital[] | any = [];
  // @Input() items: any;

  constructor() {}
}
