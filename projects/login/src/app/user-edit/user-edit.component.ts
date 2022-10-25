import { Component, OnInit } from '@angular/core';
import { Rest1Service } from "../../../_services/rest1.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userData: any = {};

  constructor(public restAPI: Rest1Service, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(){
    this.restAPI.getUser(this.id).subscribe((data: {}) => {
      this.userData = data;
    });
  }

  updateUser(){
    if(window.confirm('¿Estás seguro de actualizar este usuario?')){
      this.restAPI.updateUser(this.id, this.userData).subscribe((data) => {
        this.router.navigate(['/user-list'])
      })
    }
  }

}
