import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Rest1Service } from "../../../_services/rest1.service";

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  @Input() userDetails = {id: '', name: ''}

  constructor(public restAPI: Rest1Service, public router: Router) { }

  ngOnInit(): void {
  }

  addUser(){
    this.restAPI.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/user-list']);
    })
  }

}
