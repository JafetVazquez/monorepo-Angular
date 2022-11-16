import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ChangeDetectorRef } from "@angular/core";
import { Tickets } from 'projects/prueba2/src/assets/tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  apiURL = 'http://localhost:3000/tickets';

  displayedColumns: string[] = ['Folio', 'Título', 'Operador', 'Fecha', 'Estatus', 'Prioridad'];

  dataToDisplay: any = [];
  data: any;
  showData: boolean = false;
  idProject = this.activatedRoute.snapshot.params['idProject']
  ticketsProject: any[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private ticketsService: TicketsService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe((data) => {
      this.data = new MatTableDataSource<Tickets>(data);

      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    })
  }

  doFilter(value: any) {
    this.data.filter = value.trim().toLocaleLowerCase();
  }
}
