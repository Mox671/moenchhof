import {Component} from '@angular/core';
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
    ]
})
export class ImageCarouselComponent {
}
