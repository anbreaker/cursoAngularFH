import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';

import { CountrySmall, Country } from '../interfaces/country.interface';

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

  getCountryByAlphaCode(code: string): Observable<Country | null> {
    if (!code) {
      return of(null);
    }

    const url: string = `${this.baseUrl}alpha/${code}`;

    return this.http.get<Country>(url);
  }

  getCountryByCodeSmall(code: string): Observable<CountrySmall> {
    const url: string = `${this.baseUrl}alpha/${code}?fields=name,alphaCode3`;

    return this.http.get<CountrySmall>(url);
  }

  getCountriesByCode(borders: string[]): Observable<CountrySmall[]> {
    if (!borders) {
      return of([]);
    }

    const fetchs: Observable<CountrySmall>[] = [];

    borders.forEach((code) => {
      console.log(code, 'code');
      const fetch = this.getCountryByCodeSmall(code);

      fetchs.push(fetch);
    });

    return combineLatest(fetchs);
  }
}
