import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentHomeComponent} from "./content-home/content-home.component";
import {ContentAboutComponent} from "./content-about/content-about.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ContentHomeComponent, ContentAboutComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.less'
})
export class ContentComponent {

}
