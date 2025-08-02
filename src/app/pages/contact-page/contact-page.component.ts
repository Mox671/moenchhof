import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "../../components/map/map.component";

@Component({
    selector: 'app-contact-page',
    imports: [CommonModule, MapComponent],
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

}
