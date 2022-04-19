import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountrySmall } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryServices {
  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  private baseUrl: string = 'https://restcountries.com/v2/';

  get regions(): string[] {
    return [...this._regions];
  }

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string): Observable<CountrySmall[]> {
    const url: string = `${this.baseUrl}region/${region}?fields=alpha3Code,name`;

    return this.http.get<CountrySmall[]>(url);
  }
}
