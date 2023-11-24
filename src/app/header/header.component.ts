import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {HeaderMenuComponent} from "./header-menu/header-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HeaderMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  logoUrl: string = "/assets/logo/logo-transparent.png";
}
