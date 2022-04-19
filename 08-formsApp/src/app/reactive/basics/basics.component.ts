import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   product: new FormControl('RTX 4080Ti'),
  //   price: new FormControl(1500),
  //   stocks: new FormControl(5),
  // });

  myForm: FormGroup = this.fb.group({
    //['RTX 4080Ti',validations, asyncValidations]],
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stocks: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      product: 'RTX 4080Ti',
      price: 1500,
      stocks: 5,
    });
  }

  fieldIsValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();

    console.log(this.myForm.value);
  }
}
