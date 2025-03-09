import {AfterViewInit, Component, input} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css'],
  imports: [

  ],
  standalone: true
})
export class RoomItemComponent {
  headline = input.required<string>();
  imgSrc = input.required<string>();
  infos = input.required<string[]>();
}
