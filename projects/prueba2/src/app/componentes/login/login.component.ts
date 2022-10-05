import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../../users/users.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: any;
  password: any;
  UserService: any;
  
  constructor(public userService: UsersService, public router: Router) { }

  login(){
    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.login(user).subscribe( data => {
      console.log(data);
      
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/");
    },
    
    // error => {
    //   console.log(error);
      
    // }

    );

  }

}
