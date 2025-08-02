import {AfterViewInit, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatButton} from "@angular/material/button";
import {GoogleReview} from "./review";

declare const google: any;

@Component({
    selector: 'app-guest-book-page',
    standalone: true,
    imports: [CommonModule, MatCard, MatCardHeader, MatIcon, MatCardContent, MatProgressSpinner, MatButton],
    templateUrl: './guest-book-page.component.html',
    styleUrls: ['./guest-book-page.component.css']
})
export class GuestBookPageComponent implements AfterViewInit {
  service: any;
  public reviews: GoogleReview[] = [];
  public isLoading = true;
  public hasError = false;
  public errorMessage = '';
  private timeoutId: any;

  constructor() {}

  ngAfterViewInit() {
    this.loadReviews();
  }

  private loadReviews() {
    this.isLoading = true;
    this.hasError = false;
    this.errorMessage = '';

    // Timeout nach 10 Sekunden
    this.timeoutId = setTimeout(() => {
      this.handleError('Die Bewertungen konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
    }, 10000);

    const request = {
      placeId: 'ChIJ-QKPM4cwlkcRrHg6spPZld0',
      fields: ['reviews']
    };

    try {
      this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));
      this.service.getDetails(request, this.callback);
    } catch (error) {
      this.handleError('Fehler beim Laden der Google Maps API.');
    }
  }

  // @ts-ignore
  public callback = (place, status) => {
    clearTimeout(this.timeoutId);
    this.isLoading = false;

    if (status === google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
      this.reviews = place.reviews.slice(0, 6); // Maximal 6 Reviews anzeigen
    } else {
      this.handleError('Keine Bewertungen verfügbar.');
    }
  };

  private handleError(message: string) {
    this.isLoading = false;
    this.hasError = true;
    this.errorMessage = message;
  }

  public retryLoad() {
    this.loadReviews();
  }

  public openAllReviews() {
    // Google Maps Place URL für alle Reviews
    const placeId = 'ChIJ-QKPM4cwlkcRrHg6spPZld0';
    const url = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
    window.open(url, '_blank');
  }

  createRange(number: number): number[] {
    const items: number[] = [];
    const num = Math.floor(Number(number));
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }
}
