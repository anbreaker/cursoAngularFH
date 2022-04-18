import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Spyro', Validators.minLength(3)],
        ['Far Cry', Validators.minLength(3)],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.myForm.reset({
    //   name: '',
    // });
  }

  fieldIsValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addFavorite() {
    if (!this.newFavorite.valid) return;

    this.favoritesArr.push(
      this.fb.control(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }

  delete(pos: number) {
    this.favoritesArr.removeAt(pos);
  }

  save() {
    console.log(this.myForm.value);

    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }
}
