import { Component, OnInit } from '@angular/core';
import { CatFactsService } from "../../../_services/cat-facts.service";
import { Router } from "@angular/router";
import { TokenStorageService } from "../../../_services/token-storage.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Fact: any[] = []; //variable para almacenar los datos obtenidos por el servicio

  private roles: undefined | any | string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string | undefined;

  toggleDarkTheme(): void{
    document.body.classList.toggle('dark-theme');
  }

  constructor(private catFactsService: CatFactsService, private router: Router, private tokenStorage: TokenStorageService) { //Inyección del servicio para que esté disponible en la clase
    this.catFactsService.getLink().subscribe((data: any) => {
      this.Fact = data;      
    })
  }

  catFacts(){

    this.alertaFact('da')

    console.log(this.Fact);
    
  }

  alertaFact(text: string){
    Swal.fire({
      icon: 'info',
      title: 'Cat Facts',
      text: text
    })
  }


  ngOnInit(): void {
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
