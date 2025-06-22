import {AfterViewInit, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {GoogleReview} from "./review";

declare const google: any;

@Component({
  selector: 'app-guest-book-page',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatIcon, MatCardContent, MatCardTitle],
  templateUrl: './guest-book-page.component.html',
  styleUrls: ['./guest-book-page.component.css']
})
export class GuestBookPageComponent implements AfterViewInit {
  service: any;
  public reviews: GoogleReview[] = [];

  constructor() {}

  ngAfterViewInit() {
    const request = {
      placeId: 'ChIJ-QKPM4cwlkcRrHg6spPZld0',
      fields: ['reviews']
    };
    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    this.service.getDetails(request, this.callback);
  }

  // @ts-ignore
  public callback = (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place.reviews.slice();
    }
  };

  // @ts-ignore
  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
