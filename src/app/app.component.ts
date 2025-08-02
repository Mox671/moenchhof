import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        RouterOutlet,
        NavbarComponent,
    ],
    animations: [
        trigger('routeAnimations', [
            transition('* <=> *', [
                style({ opacity: 0 }),
                animate('0.5s', style({ opacity: 1 }))
            ])
        ])
    ]
})
export class AppComponent {
  title = 'moenchhof-webseite';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
