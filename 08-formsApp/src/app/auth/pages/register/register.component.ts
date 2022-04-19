import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(this.vs.nameSurname)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, this.vs.usernameExists]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      password2: ['', [Validators.required]],
    },
    {
      validator: [this.vs.equalFields('password', 'password2')],
    }
  );

  get emailErrorMsg(): string {
    const errorsEmail = this.myForm.get('email')?.errors;

    if (errorsEmail?.['required']) return 'Email is required';

    if (errorsEmail?.['pattern']) return 'Email format is not valid';

    if (errorsEmail?.['emailTaken']) return 'Email is already taken';

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'anb anbreaker',
      email: 'test1@test.com',
      username: 'test1',
      password: '123',
      password2: '123',
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
