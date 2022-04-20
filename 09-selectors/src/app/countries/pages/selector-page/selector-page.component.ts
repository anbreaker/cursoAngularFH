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
  });

  regions: string[] = [];
  countries: CountrySmall[] = [];

  constructor(
    private fb: FormBuilder,
    private countryServices: CountryServices
  ) {}

  ngOnInit(): void {
    this.regions = this.countryServices.regions;

    // this.myForm.get('region')?.valueChanges.subscribe((region) => {
    //   console.log(region);

    //   this.countryServices
    //     .getCountriesByRegion(region)
    //     .subscribe((countries) => {
    //       this.countries = countries;

    //       console.log(this.countries);
    //     });
    // });

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
  }

  save() {
    console.log(this.myForm.value);
  }
}
