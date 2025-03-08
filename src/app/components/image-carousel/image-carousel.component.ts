import {Component} from '@angular/core';
import {Image} from "../../pages/rooms-page/image";
import {CommonModule} from "@angular/common";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
  imports: [
    CommonModule,
    NgbCarousel,
    NgbSlide
  ],
  standalone: true
})
export class ImageCarouselComponent {
  public images: Image[] = [
    {source: 'assets/images/moenchhof-hof.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-keller.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-tor.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-zimmer.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-keller2.jpg', alt: 'test'},
    {source: 'assets/images/moenchhof-kueche.jpg', alt: 'test'},
  ];

  testImages = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
