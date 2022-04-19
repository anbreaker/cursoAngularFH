import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  @ViewChild('myForm') myForm!: NgForm;

  newGame: string = '';

  person: Person = {
    name: 'anbreaker',
    favorites: [
      { id: 1, name: 'Spyro' },
      { id: 2, name: 'Far Cry' },
    ],
  };

  validName(): boolean {
    console.log(this.myForm?.form);

    return (
      this.myForm?.form.controls['name']?.invalid &&
      this.myForm?.form.controls['name']?.touched
    );
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

  addGame() {
    const newGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };

    this.person.favorites.push({ ...newGame });
    this.newGame = '';
  }

  save() {
    this.addGame();
    console.log('click save');
  }
}
