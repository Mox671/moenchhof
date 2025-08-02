import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageCarouselComponent} from "../../components/image-carousel/image-carousel.component";

@Component({
    selector: 'app-about-us-page',
    imports: [CommonModule, ImageCarouselComponent],
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent {

}
