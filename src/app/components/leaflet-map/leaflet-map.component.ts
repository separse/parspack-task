import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-leaflet-map',
  template: `
  <section class="leaflet-map">
    <div class="map-container">
      <div class="map-frame">
        <div id="map"></div>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {
  @Input() address!: Address;
  private map!: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [+this.address.geo.lat, +this.address.geo.lng],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
