import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    console.log({ email });

    return this.http.get<any[]>(`http://localhost:3001/users?q=${email}`).pipe(
      // delay(300),
      map((res) => {
        console.log({ res });

        return res.length === 0 ? null : { emailTaken: true };
      })
    );
  }
}
