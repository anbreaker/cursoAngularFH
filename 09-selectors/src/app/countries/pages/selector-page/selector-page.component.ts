import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

import { CountrySmall } from '../../interfaces/country.interface';
import { CountryServices } from '../../services/country.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]],
  });

  // Selectors
  regions: string[] = [];
  countries: CountrySmall[] = [];
  borders: CountrySmall[] = [];

  // UI
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private countryServices: CountryServices
  ) {}

  ngOnInit(): void {
    this.regions = this.countryServices.regions;

    // Change Continent
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('country')?.reset('');
          this.loading = true;
        }),

        switchMap((region) => this.countryServices.getCountriesByRegion(region))
      )
      .subscribe((contries) => {
        this.countries = contries;

        this.loading = false;
      });

    // Change Country
    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('border')?.reset('');

          this.loading = true;
        }),
        switchMap((code) => this.countryServices.getCountryByAlphaCode(code)),
        switchMap((country) => {
          console.log('cosas asadsfdasjfldf');
          return this.countryServices.getCountriesByCode(country?.borders!);
        })
      )
      .subscribe((countries) => {
        // this.borders = country?.borders || [];
        this.borders = countries;

        console.log(countries);

        this.loading = false;
      });
  }

  save() {
    console.log(this.myForm.value);
  }
}
