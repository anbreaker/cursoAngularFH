import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[customMin]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validators {
  @Input() minimun!: number;

  constructor() {
    // console.log(this.minimun, 'CustomMinDirective');
  }

  validate(control: FormControl) {
    const inputValue = control.value;

    return inputValue < this.minimun ? { customMin: true } : null;
  }
}
