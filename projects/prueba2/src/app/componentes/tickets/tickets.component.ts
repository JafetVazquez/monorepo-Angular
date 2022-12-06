import { Component, OnInit, ViewChild, ChangeDetectorRef, ɵɵqueryRefresh } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { ProjectsService } from "../../../services/projects.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Tickets } from 'projects/prueba2/src/assets/tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  // apiURL = 'http://localhost:3000/tickets';
  filterValues = {};
  filterSelectObj = [
    {
      name: 'proyecto',
      columnProp: 'proyecto',
      options: []
    }
  ];

  displayedColumns: string[] = ['Folio', 'Título', 'Operador', 'Fecha', 'Estatus', 'Prioridad'];

  dataToDisplay: any = [];
  data: any;
  showData: boolean = false;
  idProject = this.activatedRoute.snapshot.params['idProject']
  ticketsProject: any[] = [];

  actorPanelOpenState = false;

  projects: any[] = [];
  project: any;

  selectedProjects: string[] = [];
  // actors: string[] = ['bradley cooper', 'jennifer lawrance','penelope cruz','javier bardem','winona ryder'];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private ticketsService: TicketsService, private ref: ChangeDetectorRef, private projectService: ProjectsService) {

    

  }

  ngOnInit(): void {

    this.refresh();

    // this.projectService.getProjects().subscribe((data: any) => {
    //   this.projects = data;      
    // })
  }

  // onGroupsChange(selectedPizzas: string[]) {
  //   console.log(selectedPizzas);
  // }

  doFilter(value: any) {
    this.data.filter = value.trim().toLocaleLowerCase();
  }

  projectFilter(value: any) {
    this.data.filter = value.trim().toLocaleLowerCase();
  }

  refresh(){
    this.ticketsService.getTickets().subscribe((data) => {
      this.data = new MatTableDataSource<Tickets>(data);

      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
      this.ref.detectChanges();
    })
  }

  // getFilterObject(fullObj: any, key: any){
  //   const uniqChk: any[] = [];
  //   fullObj.filter((obj: any) => {
  //     if(!uniqChk.includes(obj[key])){
  //       uniqChk.push(obj[key]);
  //     }
  //     return obj;
  //   });
  //   return uniqChk;
  // }

  // filterChange(filter: any, event: any){
  //   this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase();
  // }
}
