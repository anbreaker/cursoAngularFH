import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  term: string = '';
  heroes: Hero[] = [];
  heroSelected: Hero | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  search() {
    this.heroesService
      .getSuggestions(this.term.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  selectOption(event: MatAutocompleteSelectedEvent) {
    const hero: Hero = event.option.value;

    if (!event.option.value) {
      this.heroSelected = undefined;
      return;
    }

    this.term = hero.superhero;

    this.heroesService.getHeroById(hero.id!).subscribe((hero) => {
      this.heroSelected = hero;
    });
  }
}
