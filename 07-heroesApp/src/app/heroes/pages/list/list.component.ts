import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  heroes: Hero[] = [];
  loading: boolean = true;

  constructor(private heroesSevice: HeroesService) {}

  ngOnInit(): void {
    this.heroesSevice.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;

      this.loading = false;
    });
  }
}
