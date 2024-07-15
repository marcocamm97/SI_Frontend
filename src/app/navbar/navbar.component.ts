import { Component, Input } from '@angular/core';
import {NgIf} from "@angular/common";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() username: string = '';

  /*navItems = [
    { label: 'Home', link: '#' },
    { label: 'Courses', link: '#courses' },
    { label: 'Categories', link: '#ctg' },
    { label: 'Login', link: '#login' },
    { label: 'Subscribe', link: '#sub' },
    { label: 'More', link: '#', dropdownItems: [
        { label: 'Social Media', link: '#socialmedia' }
      ]
    },
    { label: 'Shopping Cart', link: '#', iconClass: 'fas fa-shopping-cart' }
  ];
*/

}
