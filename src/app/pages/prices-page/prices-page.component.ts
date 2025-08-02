import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

@Component({
    selector: 'app-prices-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './prices-page.component.html',
    styleUrls: ['./prices-page.component.css']
})
export class PricesPageComponent {
  constructor() {
    registerLocaleData(localeDe, 'de-DE', localeDeExtra);
  }
}
