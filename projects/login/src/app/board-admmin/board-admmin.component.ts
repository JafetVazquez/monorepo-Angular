import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../../_services/employees.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-admmin',
  templateUrl: './board-admmin.component.html',
  styleUrls: ['./board-admmin.component.css']
})
export class BoardAdmminComponent implements OnInit {

  employees: any[] = [];

  constructor(public employeesService: EmployeesService, private router: Router) { 
    this.employees = employeesService.getEmployees();
  }

  showEmployee(id: number){
    this.router.navigate(['employee', id])
  }

  ngOnInit(): void {
  }

}
