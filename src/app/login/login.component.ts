import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LoginRequest} from "../../model/loginRequest";
import {SignUpRequest} from "../../model/signUpRequest";
import {FormsModule, NgForm} from '@angular/forms';
import {UserDto} from "../../model/UserDto";
import {UserService} from "../services/user.service";
import {Router} from '@angular/router';
import {NgIf} from "@angular/common";




@Component({
  selector: 'app-login',

  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit {


  loginRequest: LoginRequest = new LoginRequest();
  //signUpRequest: SignUpRequest = new SignUpRequest();
  signUpRequest: any;

  constructor(public userService:UserService, public router: Router) {}

  /*submit() {
    console.log(this.loginRequest)
  }*/


  ngOnInit(): void {}


  onSubmit(form: NgForm) : void{
    if(form.valid){
      this.userService.login(this.loginRequest).subscribe(res => {console.log("res",res);
      this.router.navigate(['/']);
      }
      )
    }
  }


  protected readonly NgForm = NgForm;

}
