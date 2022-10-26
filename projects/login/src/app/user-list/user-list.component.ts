import { Component, OnInit } from '@angular/core';
import { Rest1Service } from "../../../_services/rest1.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  User: any = [];

  constructor( public restAPI: Rest1Service ) { }

  ngOnInit(): void {
    this.loadUser();    
  }

  loadUser(){
    return this.restAPI.getUsers().subscribe((data: {}) => {
      this.User = data;
    })
  }

  deleteUser(id: any){

    if(window.confirm('¿Estás seguro de eliminar este usuario?')){
      this.restAPI.deleteUser(id).subscribe((data) => {
        this.loadUser();
      })
    }

  }

  eliminar(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}