import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  logos = [{image: 'best_engage_srl_logo.jpg'}, {image: 'SI_logo.jpg'}, {image: 'ibm.png'}];

}
