import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {CoursesComponent} from "./courses/courses.component";
import {FooterComponent} from "./footer/footer.component";
import {UserService} from "./services/user.service";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RecoveryComponent} from "./recovery/recovery.component";
import {CarouselComponent} from "./carousel/carousel.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,


    NavbarComponent,
    LoginComponent,
    CoursesComponent,
    FooterComponent, SignUpComponent,
    RecoveryComponent, CarouselComponent


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courses-app';

  constructor(private userService:UserService){

    this.userService.getAll().subscribe(result => {
      console.log(result);
    });

  }




}
