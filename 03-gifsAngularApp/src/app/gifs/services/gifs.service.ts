import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponseI } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apiKeyGiphy: string = environment.apiKeyGiphy;
  private _apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    const history = localStorage.getItem('history');

    if (history) {
      this._history = JSON.parse(history);
    }

    this.results = JSON.parse(localStorage.getItem('result')!) || [];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);

      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKeyGiphy)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponseI>(`${this._apiUrl}/search`, { params })
      .subscribe((res) => {
        this.results = res.data;

        localStorage.setItem('result', JSON.stringify(this.results));
      });
  }
}
