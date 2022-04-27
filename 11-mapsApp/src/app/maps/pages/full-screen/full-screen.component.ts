import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #map {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let mapZoom = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-6.97708841262686, 38.87720482451688],
      zoom: 14,
    });
  }
}
