import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false,
    });

    //RXJS

    this.myForm.valueChanges.subscribe(({ terms, ...rest }) => {
      this.person = rest;
    });
  }

  save() {
    const formValue = { ...this.myForm.value };

    console.log(formValue);
  }
}
