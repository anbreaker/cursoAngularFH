import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('searchTerm') searchTerm!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchGifs() {
    const value = this.searchTerm.nativeElement.value;

    if (value.trim().length === 0) return;

    this.gifsService.searchGifs(value);

    this.searchTerm.nativeElement.value = '';
  }
}
