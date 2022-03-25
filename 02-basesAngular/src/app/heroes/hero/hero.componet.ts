import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 44;

  get nameCapitalized(): string {
    return this.name.toLocaleUpperCase();
  }

  getName(): string {
    return `${this.name} age ${this.age}`;
  }

  changeName(): string {
    return (this.name = 'Spiderman');
  }

  changeAge(): number {
    return (this.age = 27);
  }
}
