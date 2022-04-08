import { Component, OnInit } from '@angular/core';

import { Capital } from '../../interfaces/capitals-interfaces';
import { CountryService } from '../../services/contry.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [],
})
export class PerCapitalComponent implements OnInit {
  term: string = '';
  existError: boolean = false;
  capitals: Capital[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  searchCapital(term: string) {
    this.existError = false;

    this.term = term;

    this.countryService.searchCapital(this.term).subscribe(
      (capitals) => {
        this.capitals = capitals;
      },
      (error) => {
        this.existError = true;

        this.capitals = [];

        console.info(error);
      }
    );
  }
}
