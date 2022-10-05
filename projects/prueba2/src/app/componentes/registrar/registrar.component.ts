import { Component, OnInit } from '@angular/core';
import { User1Component } from "../../users/user1/user1.component";
import { FormsModule } from "@angular/forms";
import { UsersService } from '../../users/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent{
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor(public userService: UsersService, public router: Router) { }

  register(){
    console.log(this.email);
    console.log(this.password);

    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.register(user).subscribe(data => {
      console.log(data);
      
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/")
    });
  }

}
