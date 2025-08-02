import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [
        RouterLink,
        RouterLinkActive
    ]
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isHomeActive(): boolean {
    return this.router.url === '/' || this.router.url === '/ueber-uns';
  }
}
