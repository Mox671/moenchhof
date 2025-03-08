/// <reference types="@angular/localize" />

import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom, LOCALE_ID} from "@angular/core";
import {provideRouter} from "@angular/router";
import {APP_ROUTES} from "./app/app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule, BrowserAnimationsModule),
    provideRouter(APP_ROUTES),
    {provide: LOCALE_ID, useValue: 'de'}
  ],
})
  .catch(err => console.error(err));
