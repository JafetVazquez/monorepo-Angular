import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from "../../_services/token-storage.service";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login';
  private roles: undefined | any | string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string | undefined;
  
  constructor(private tokenStorage: TokenStorageService){}

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void{
    this.tokenStorage.signout();
    window.location.reload();
  }
}