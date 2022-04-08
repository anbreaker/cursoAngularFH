import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/countries-interfaces';
import { CountryService } from '../../services/contry.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [],
})
export class ShowCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByAlpha(id)),
        tap(console.log)
      )
      .subscribe((country: Country) => {
        this.country = country;
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.countryService.getCountryByAlpha(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });
  }
}
