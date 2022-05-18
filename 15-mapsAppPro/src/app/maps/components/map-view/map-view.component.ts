import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { Map, Popup, Marker } from 'mapbox-gl';

import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private placeService: PlacesService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {
    if (!this.placeService.userLocation)
      throw new Error('User location is not set');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placeService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`
      <h6 class="text">I'm Here!</h6>
      <span class="text">I'm in this corner of the world</span>`);

    new Marker({ color: 'crimson' })
      .setLngLat(this.placeService.userLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }
}
