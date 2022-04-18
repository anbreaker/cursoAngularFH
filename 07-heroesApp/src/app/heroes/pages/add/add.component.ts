import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alter_img: '',
  };

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        this.hero = hero;
      });
  }

  save() {
    if (this.hero.superhero.trim().length === 0) return;

    if (this.hero.id) {
      // updated
      this.heroService
        .updatedHero(this.hero)
        .subscribe((hero) => this.showSnackBar(`Hero updated!`));
    } else {
      // add
      this.heroService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);

        this.showSnackBar(`Hero added!`);
      });
    }
  }

  deleteHero() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: { ...this.hero },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.deleteHero(this.hero.id!).subscribe(() => {
          this.router.navigate(['/heroes']);
          this.showSnackBar('Hero deleted!');
        });
      }
    });
  }

  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close!', { duration: 2000 });
  }
}
