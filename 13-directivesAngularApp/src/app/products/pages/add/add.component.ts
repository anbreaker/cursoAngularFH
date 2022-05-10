import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  message1: string = 'anbreaker';
  color: string = 'green';

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  changeName(): void {
    this.message1 = Math.random().toString();
  }

  changeColor(): void {
    const color = `#${crypto
      .getRandomValues(new Uint32Array(1))[0]
      .toString(16)
      .padStart(8, '0')
      .slice(-6)}`;

    this.color = color;
  }
}
