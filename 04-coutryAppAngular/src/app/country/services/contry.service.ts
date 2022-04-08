import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/countries-interfaces';
import { Capital } from '../interfaces/capitals-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(term: string): Observable<Capital[]> {
    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Capital[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string) {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`;

    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
