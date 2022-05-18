import { Component } from '@angular/core';

import { PlacesService, MapService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss'],
})
export class BtnMylocationComponent {
  constructor(
    private placeService: PlacesService,
    private mapService: MapService
  ) {}

  goToMyLocation() {
    if (!this.placeService.isUserLocationReady)
      throw new Error('User location is not set');
    if (!this.mapService.isMapReady) throw new Error('Map is not ready');

    this.mapService.flyTo(this.placeService.userLocation!);
  }
}
