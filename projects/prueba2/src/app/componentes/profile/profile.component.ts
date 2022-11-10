import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../../services/profile.service";
import { Profile } from "../../../assets/profile";

import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // id = this.activatedRoute.snapshot.params['id'];
  id = '1';
  perfilData: any = {};

  perfilModel = new Profile("", "", "", "", "", "", "", "", "", "");

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private perfilService: ProfileService) { }

  ngOnInit(): void {

    this.perfilService.getUserById(this.id).subscribe((data: {}) => {
      this.perfilData = data;
    })

  }

  updateInfo(){
    if(window.confirm('Deseas actualizar la info?')){
      this.perfilService.updateUser(this.id, this.perfilData).subscribe((data: {}) => {
        this.msgAlert('success', 'Usuario actualizado!');
        this.router.navigate(['/profile']);
      })
    }
  }
  

  msgAlert = (icon: any, title: any) => {
    // Swal.fire({
    //   icon:'success',
    //   title: 'Producto agregado correctamente',
    // })

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
