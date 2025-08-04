import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomItemComponent} from "../../components/room-item/room-item.component";
import {RoomItem} from "./room-item";

@Component({
    selector: 'app-rooms-page',
    imports: [CommonModule, RoomItemComponent],
    templateUrl: './rooms-page.component.html',
    styleUrls: ['./rooms-page.component.css']
})
export class RoomsPageComponent {
  roomItems: RoomItem[] = [
    {
      imgSrc: 'assets/icons/house-check.svg',
      headline: 'Einrichtungen Betrieb',
      infos: ['Einstellplatz für Fahrräder', 'Haustiere nicht erlaubt', 'Historisches Gebäude', 'PKW-Parkplatz', 'Satelliten-TV, WiFi']
    },
    {
      imgSrc: 'assets/icons/location-pin.svg',
      headline: 'Lage',
      infos: ['Autobahnanschluss - Entfernung (m): 4000', 'Bahnhof - Entfernung (m): 1000' +
      'Ortsrand', 'Radweg - Entfernung (m): 100', 'Wald - Entfernung (m): 5000', 'Weinberg - Entfernung (m): 100']
    },
    {
      imgSrc: 'assets/icons/people.svg',
      headline: 'Eignung',
      infos: ['Einzelreisende', 'Familien', 'Geschäftsreisende', 'Nichtraucher', 'Senioren']
    },
    {
      imgSrc: 'assets/icons/money-wallet.svg',
      headline: 'Zahlungsarten',
      infos: ['Barzahlung']
    },
    {
      imgSrc: 'assets/icons/flag.svg',
      headline: 'Fremdsprachen',
      infos: ['Englisch', 'Französisch', 'Spanisch']
    },
    {
      imgSrc: 'assets/icons/double-bed.svg',
      headline: 'Betten & Zimmer',
      infos: ['Doppelzimmer: 2']
    }
  ]
}
