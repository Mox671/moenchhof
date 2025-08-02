import {Routes} from "@angular/router";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {GuestBookPageComponent} from "./pages/guest-book-page/guest-book-page.component";
import {RoomsPageComponent} from "./pages/rooms-page/rooms-page.component";
import {DataPrivacyPageComponent} from "./data-privacy-page/data-privacy-page.component";
import {ImpressumPageComponent} from "./impressum-page/impressum-page.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutUsPageComponent
  },
  {
    path: 'ueber-uns',
    pathMatch: 'full',
    component: AboutUsPageComponent
  },
  {
    path: 'kontakt',
    pathMatch: 'full',
    component: ContactPageComponent
  },
  {
    path: 'gaestebuch',
    pathMatch: 'full',
    component: GuestBookPageComponent
  },
  {
    path: 'zimmer',
    pathMatch: 'full',
    component: RoomsPageComponent
  },
  {
    path: 'impressum',
    pathMatch: 'full',
    component: ImpressumPageComponent
  },
  {
    path: 'datenschutz',
    pathMatch: 'full',
    component: DataPrivacyPageComponent
  }
];
