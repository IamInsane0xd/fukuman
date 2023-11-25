import {Component, OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';

declare var homePage: any;
declare var aboutPage: any;

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.less'
})
export class HeaderMenuComponent implements OnInit {
  ngOnInit() {
    new homePage();
    new aboutPage();

    homePage();
  }
}
