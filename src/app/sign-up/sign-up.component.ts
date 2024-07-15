import { Component } from '@angular/core';
import { SignUpRequest} from "../../model/signUpRequest";
import {UserService} from "../services/user.service";
import {OnInit} from "@angular/core";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  signUpRequest: SignUpRequest = new SignUpRequest();

  private userService: UserService;

  constructor(userService: UserService, public router: Router) {
    this.userService = userService;
  }



  ngOnInit(): void {}


  onSubmit(form: NgForm) : void{
    if(form.valid){
      this.userService.userRegistration(this.signUpRequest).subscribe(res => {console.log("res",res);
          this.router.navigate(['/']);
        }
      )
    }
  }


  protected readonly NgForm = NgForm;

  }

