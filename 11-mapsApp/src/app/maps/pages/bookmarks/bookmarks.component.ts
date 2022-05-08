import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface colorMarker {
  color: string;
  marker?: mapboxgl.Marker;
  center?: [number, number];
}
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styles: [
    `
      li {
        background-color: #0d6efd;
        color: aliceblue;
        cursor: pointer;
        width: 100px;
      }

      .list-group {
        position: fixed;
        right: 2rem;
        top: 2rem;
        z-index: 10;
      }

      .map-container {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class BookmarksComponent implements AfterViewInit {
  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-6.97708841262686, 38.87720482451688];

  // Markers[]
  markers: colorMarker[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.readLocalStorage();

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'hello world<-----------------------';

    // new mapboxgl.Marker()
    // // { element: markerHtml}
    //   .setLngLat(this.center)
    //   .addTo(this.map);
  }

  addMaker() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const newMarker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(this.center)
      .addTo(this.map);

    this.markers.push({
      color,
      marker: newMarker,
    });

    this.saveMarkerLocalStorage();

    newMarker.on('dragend', () => {
      this.saveMarkerLocalStorage();
    });
  }

  goMarker(marker: mapboxgl.Marker) {
    this.map.flyTo({
      center: marker.getLngLat(),
    });
  }

  saveMarkerLocalStorage() {
    const lngLatArr: colorMarker[] = [];

    this.markers.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        center: [lng, lat],
      });
    });

    localStorage.setItem('markers', JSON.stringify(lngLatArr));
  }

  readLocalStorage() {
    if (!localStorage.getItem('markers')) return;

    const lngLatArr: colorMarker[] = JSON.parse(
      localStorage.getItem('markers')!
    );

    lngLatArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({ draggable: true, color: m.color })
        .setLngLat(m.center!)
        .addTo(this.map);

      this.markers.push({
        marker: newMarker,
        color: m.color,
      });

      newMarker.on('dragend', () => {
        this.saveMarkerLocalStorage();
      });
    });
  }

  deleteMarker(pos: number) {
    this.markers[pos].marker?.remove();

    this.markers.splice(pos, 1);

    this.saveMarkerLocalStorage();
  }
}
