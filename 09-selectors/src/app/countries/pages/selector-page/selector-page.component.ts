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

  regions: string[] = [];
  countries: CountrySmall[] = [];
  borders: string[] = [];

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
        tap((_) => this.myForm.get('country')?.reset('')),

        switchMap((region) => this.countryServices.getCountriesByRegion(region))
      )
      .subscribe((contries) => {
        this.countries = contries;

        console.log(this.countries);
      });

    // Change Country
    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        tap((_) => {
          this.borders = [];
          this.myForm.get('border')?.reset('');
        }),
        switchMap((code) => this.countryServices.getCountryByAlphaCode(code))
      )
      .subscribe((country) => {
        console.log(country);

        this.borders = country?.borders || [];
      });
  }

  save() {
    console.log(this.myForm.value);
  }
}
