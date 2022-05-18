import { Component } from '@angular/core';

import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places.interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public selectedId: string = '';

  constructor(
    private placeService: PlacesService,
    private mapService: MapService
  ) {}

  get isLoadingPlaces(): boolean {
    return this.placeService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placeService.places;
  }

  flyTo(place: Feature) {
    this.selectedId = place.id;

    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }
}
