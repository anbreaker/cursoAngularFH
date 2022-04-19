import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  // TODO temp
  nameSurname: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.nameSurname)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Magalí Antúnez',
    });
  }

  fieldIsValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
