import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  // myForm: FormGroup = new FormGroup({
  //   product: new FormControl('RTX 4080Ti'),
  //   price: new FormControl(1500),
  //   stocks: new FormControl(5),
  // });

  myForm: FormGroup = this.fb.group({
    //['RTX 4080Ti',validations, asyncValidations]],
    product: ['RTX 4080Ti', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stocks: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}
}
