import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) {}

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('id', auth.id))
    );
  }

  checkAuth(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }
}
