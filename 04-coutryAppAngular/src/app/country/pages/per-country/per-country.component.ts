import { Component } from '@angular/core';
import { CountryService } from '../../services/contry.service';

import { Country } from '../../interfaces/countries-interfaces';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PerCountryComponent {
  constructor(private countryService: CountryService) {}

  term = '';
  existError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showTips: boolean = false;

  searchCountry(term: string) {
    this.showTips = false;
    this.existError = false;

    this.term = term;

    this.countryService.searchCountry(this.term).subscribe(
      (contries) => {
        // console.log(contries);

        this.countries = contries;
      },

      (error) => {
        this.existError = true;

        this.countries = [];

        console.info(error, 'en el error de country!!!');
      }
    );
  }

  tips(term: string) {
    this.existError = false;
    this.term = term;
    this.showTips = true;

    this.countryService.searchCountry(term).subscribe(
      (countries) => {
        this.suggestedCountries = countries.splice(0, 5);
      },
      (error: Error) => {
        this.suggestedCountries = [];
      }
    );
  }

  searchSuggested(term: string) {
    this.searchCountry(term);
  }
}
