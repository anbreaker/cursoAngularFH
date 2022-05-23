import { Injectable } from '@angular/core';

import {
  AnySourceData,
  LngLatBounds,
  LngLatLike,
  Map,
  Marker,
  Popup,
} from 'mapbox-gl';
import { Feature } from '../interfaces/places.interfaces';
import { directionsApiClient } from '../api';
import {
  DirectionResponse,
  Route,
} from '../interfaces/directionResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map;
  private markers: Marker[] = [];

  get isMapReady() {
    return !!this.map;
  }

  constructor(private directionsApi: directionsApiClient) {}

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw new Error('This map is not ready');

    this.map?.flyTo({
      zoom: 14,
      center: coords,
    });
  }

  createMarkersForPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this.isMapReady) throw new Error('This map is not ready');

    this.markers.forEach((marker) => marker.remove());

    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.center;

      const popup = new Popup().setHTML(`
        <h6>${place.text}</h6> 
        <span>${place.place_name}</span> 
      `);

      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map!);

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers;

    if (places.length === 0) return;

    // Maps Limits
    const bounds = new LngLatBounds();

    newMarkers.forEach((marker) => bounds.extend(marker.getLngLat()));

    bounds.extend(userLocation);

    this.map?.fitBounds(bounds, { padding: 200 });
  }

  getRouteBetweenPoints(start: [number, number], end: [number, number]) {
    this.directionsApi
      .get<DirectionResponse>(`/${start.join(',')};${end.join(',')}`)
      .subscribe((response) => this.drawPolyline(response.routes[0]));
  }

  private drawPolyline(route: Route) {
    console.log({
      distance: route.distance / 1000,
      duration: route.duration / 60,
    });

    if (!this.map) throw new Error('This map is not ready');

    const coords = route.geometry.coordinates;

    const bounds = new LngLatBounds();
    coords.forEach((coord) => bounds.extend(coord as LngLatLike));

    this.map?.fitBounds(bounds, { padding: 200 });

    // Polyline
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords,
            },
          },
        ],
      },
    };
    // TODO clean previos routes
    if (this.map.getLayer('RouteString')) {
      this.map.removeLayer('RouteString');

      this.map.removeSource('RouteString');
    }

    this.map.addSource('RouteString', sourceData);

    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'crimson',
        'line-width': 3,
      },
    });
  }
}
