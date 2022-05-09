import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private http: HttpClient) {}

  getSocialNetworksUsers() {
    return this.http.get('http://localhost:3000/chart');
  }

  getSocialNetworksUsersForDona() {
    return this.getSocialNetworksUsers().pipe(
      delay(1200),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }
}
