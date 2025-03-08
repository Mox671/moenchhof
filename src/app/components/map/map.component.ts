import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  imports: [

  ],
  standalone: true
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;


  private initMap(): void {
    this.map = L.map('map', {
      center: [ 49.522782, 8.184117 ],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const marker = L.marker([49.522782, 8.184117 ]);
    marker.bindPopup("Hier finden sie unser Gästehaus").openPopup();

    tiles.addTo(this.map);
    marker.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
