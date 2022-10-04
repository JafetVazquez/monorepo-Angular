import { Component, OnInit } from '@angular/core';
import { User1Component } from "../../users/user1/user1.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string | undefined;
  password: string | undefined;
  UserService: any;
  
  constructor() { }

  login(){
    console.log(this.email);
    console.log(this.password);

    const user = {
      email: this.email,
      password: this.password
    }
    
    this.UserService.login(user).subscribe( (data: any) => {
      console.log(data);
    } )
  }

}
