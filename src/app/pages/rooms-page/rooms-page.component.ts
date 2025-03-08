import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Image} from "./image";

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.css']
})
export class RoomsPageComponent {
  images: Image[] = [
    {source: 'assets/images/moenchhof-hof.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-keller.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-tor.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-zimmer.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-keller2.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-kueche.jpg', alt: 'test'},
  ];
}
