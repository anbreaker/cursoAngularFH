import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;
  constructor(private placeService: PlacesService) {}

  onQueryChange(query: string = '') {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      console.log('Send this query', query);

      this.placeService.getPlacesByQuery(query);
    }, 350);
  }
}
