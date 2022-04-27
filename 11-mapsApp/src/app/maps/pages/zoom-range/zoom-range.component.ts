import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container {
        height: 100%;
        width: 100%;
      }

      .row {
        background-color: #002b36;
        border-radius: 5px;
        color: aliceblue;
        padding: 10px;
        position: fixed;
        top: 80%;
        z-index: 10;
      }
    `,
  ],
})
export class ZoomRangeComponent implements OnInit {
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
