import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameSurname)]],
    email: [
      '',
      [Validators.required, Validators.pattern(this.vs.emailPattern)],
    ],
    username: ['', [Validators.required, this.vs.usernameExists]],
  });

  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Magali Antunez',
      email: 'anbreaker@rootdevs.com',
      username: 'anbreaker',
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
