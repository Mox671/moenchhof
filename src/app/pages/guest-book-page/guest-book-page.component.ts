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
    const url = `https://www.google.com/maps/place/Gästehäuser+Mönchhof/@49.5227999,8.1840104,17z/data=!4m11!3m10!1s0x47963087338f02f9:0xdd95d993b23a78ac!5m2!4m1!1i2!8m2!3d49.5227999!4d8.1840104!9m1!1b1!16s%2Fg%2F1tjrnxwf?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D`;
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
