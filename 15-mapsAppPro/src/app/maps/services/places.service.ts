import { Injectable } from '@angular/core';

import { PlacesApiClient } from '../api/placesApiClient';
import { PlacesResponse, Feature } from '../interfaces/places.interfaces';
import { MapService } from './';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(
    private mapService: MapService,
    private placesApi: PlacesApiClient
  ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];

          resolve(this.userLocation);
        },
        (error) => {
          alert('Geolocation is not available.');

          console.log(error);

          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    if (query.length === 0) {
      this.places = [];

      this.isLoadingPlaces = false;
      return;
    }

    if (!this.userLocation) throw new Error('User location is not ready.');

    this.isLoadingPlaces = true;

    this.placesApi
      .get<PlacesResponse>(`/${query}.json?`, {
        params: { proximity: this.userLocation.join(',') },
      })
      .subscribe((response) => {
        this.isLoadingPlaces = false;

        this.places = response.features;

        this.mapService.createMarkersForPlaces(this.places, this.userLocation!);
      });
  }

  deletePlaces() {
    this.places = [];
  }
}
