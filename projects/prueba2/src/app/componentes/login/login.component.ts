import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { UsersService } from "../../users/users.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup | any;
  // apiURL = 'http://localhost:3000/users';
  apiURL = environment.apiUrl;

  email = 'jetvax.jv@gmail.com';
  password = '123';
  // UserService: any;
  
  constructor(private http: HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'correo': new FormControl(),
      'password': new FormControl()
    });

    this.alertaInicio();
  }

  loginData(login: FormGroup){
    this.http.get<any>(this.apiURL + '/usuario/').subscribe(data => {
      const user = data.find((a: any) => {
        return a.correo === this.login.value.correo && a.password === this.login.value.contrasenia
      });

      if(user){
        // alert('successfully logged in');
        this.msgAlert('success', 'Inicio de sesión exitoso');
        this.login.reset();
        // $('.form-box').css('display', 'none');
        this.router.navigate(['ticket']);
      }else{
        // alert('failed to login');
        this.msgAlert('error', 'Error al iniciar sesión');
        this.login.reset();
        this.router.navigate(['/'])
      }
    }, err => {
      // alert('algo salió mal!')
      this.msgAlert('error', '¡Algo salió mal!');
    })
  }
  
  sbtn1(){
    $('.form-box').css('display', 'none');
    $('.form-box').css('display', 'block');
  }

  msgAlert = (icon: any, title: any) => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: title
    })
  }

  alertaInicio = () => {
    Swal.fire(
      'INFO',
      'Este sitio solo es una prueba, tal vez tenga errores al navegar...',
      'info'
    )
  }
  // login(){
  //   const user = {
  //     email: this.email,
  //     password: this.password
  //   };

  //   this.userService.login(user).subscribe( data => {
  //     console.log(data);
      
  //     this.userService.setToken(data.token);
  //     this.router.navigateByUrl("/");
  //   },
    
  //   // error => {
  //   //   console.log(error);
      
  //   // }

  //   );

  // }

}