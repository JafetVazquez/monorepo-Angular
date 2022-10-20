import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeesService } from "../../../_services/employees.service";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-board-gestor',
  templateUrl: './board-gestor.component.html',
  styleUrls: ['./board-gestor.component.css']
})
export class BoardGestorComponent implements OnInit {

  employee: any = {};

  constructor(private activatedRoute: ActivatedRoute, private employeesService: EmployeesService) {
    this.activatedRoute.params.subscribe((params) => {
      this.employee = this.employeesService.getEmployee(params['id']);
      
    })

    
  }

  detalles(){
    this.msgAlert(this.employee.id, this.employee.name.first, this.employee.name.last, this.employee.email)
  }

  msgAlert = (id: any, name: string, lastname: string, email: string) => {
    Swal.fire({
      icon: 'info',
      html: '<h1 class="mb-3" align="center">' + name + '</h1>' +
            '<b><h6 class="mb-3" align="left">Nombre completo:</h6></b>' +
            '<i><h6 class="mb-3" align="justify">' + name + ' ' + lastname + '</h6></i>' +
            '<b><h6 class="mb-3" align="left">Email:</h6></b>' +
            '<i><h6 class="mb-3" align="justify">' + email + '</h6></i>',
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
      confirmButtonColor: 'black',
    })
  }

  ngOnInit(): void {
  }

}
