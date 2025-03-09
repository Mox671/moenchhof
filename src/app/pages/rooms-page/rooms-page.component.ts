import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomItemComponent} from "../../components/room-item/room-item.component";
import {RoomItem} from "./room-item";

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [CommonModule, RoomItemComponent],
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.css']
})
export class RoomsPageComponent {
  roomItems: RoomItem[] = [
    {
      imgSrc: 'assets/icons/house-check.svg',
      headline: 'Einrichtungen Betrieb',
      infos: ['Einstellplatz für Fahrräder', 'Haustiere nicht erlaubt', 'Historisches Gebäude', 'PKW-Parkplatz', 'Satelliten-TV']
    },
    {
      imgSrc: 'assets/icons/location-pin.svg',
      headline: 'Einrichtungen Betrieb',
      infos: ['Einstellplatz für Fahrräder', 'Haustiere nicht erlaubt', 'Historisches Gebäude', 'PKW-Parkplatz', 'Satelliten-TV']
    }
  ]
}
