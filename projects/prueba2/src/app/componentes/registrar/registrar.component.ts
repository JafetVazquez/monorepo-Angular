import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  signUp: FormGroup | any;
  signUser: any;
  creacion: Date = new Date();
  // apiURL = 'http://localhost:3000/users';
  apiURL = environment.apiUrl
  roles: any[] = [];
  proyectos: any[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  // register(){

  //   this.userService.register(this.signUp).subscribe(data => {
  //     console.log(data);
      
  //     this.userService.setToken(data.token);
  //     this.router.navigateByUrl("/")
  //   });
  // }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      // 'id': new FormControl(),
      'nombre': new FormControl(),
      'paterno': new FormControl(),
      'materno': new FormControl(),
      'correo': new FormControl(),
      'contrasenia': new FormControl(),
      'creacion': new FormControl(),
      'actualizacion': new FormControl(),
      'rol': new FormControl(),
      'proyecto': new FormControl(),
      'estatus': new FormControl(1)
    });

    this.http.get<any>(this.apiURL + '/rol/').subscribe((data: any) => {
      this.roles = data;
      // console.log(data);
      
    })

    this.http.get<any>(this.apiURL + '/proyecto/').subscribe((data: any) => {
      this.proyectos = data;
      // console.log(data);
      
    })
  }

  signUpData(signUp: FormGroup){
    this.signUser = this.signUp.value.correo;
    console.log(this.signUp.value);
    
    this.http.post<any>(this.apiURL + '/usuario/', this.signUp.value).subscribe(data => {
      // alert('datos añadidos');
      this.msgAlert('success', 'Usuario Registrado');
      this.signUp.reset();

      this.router.navigate(['/'])
    }, err => {
      // alert('algo salió mal')
      this.msgAlert('error', 'Error al registrar')
    })
  }

  sbtn(){
    // this.router.navigate(['/']);
    $('.form-box').css('diplay', 'block');
    $('.form-box').css('diplay', 'none');
  }

  msgAlert = (icon: any, title: any) => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
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

}
