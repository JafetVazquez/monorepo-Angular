import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { Tickets } from "../../../assets/tickets";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-ticket-gestor',
  templateUrl: './ticket-gestor.component.html',
  styleUrls: ['./ticket-gestor.component.css']
})
export class TicketGestorComponent implements OnInit, OnDestroy {

  apiURL = 'http://localhost:3000/tickets';
  displayedColumns: string[] = ['Folio', 'Título', 'Operador', 'Fecha', 'Estatus', 'Prioridad'];
  dataToDisplay: any = [];
  data: any;
  showData: boolean = false;
  codigoProject = this.activatedRoute.snapshot.params['codigo']
  ticketsProject: any = {};
  nombreProject: string = '';

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private ticketsService: TicketsService) {
    this.ticketsService

    this.http.get(this.apiURL + '?ticket_proyecto=' + this.codigoProject).subscribe((data) => {
      this.data = data;         

      setTimeout(()=>{
        $('#datatableExample').DataTable({
          pagingType: 'simple_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25],
          language:{url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'},
          "dom": 'fltip',
        });
      }, 1);

      
    });
  }

  ngOnInit(): void {

    this.http.get(this.apiURL + '?ticket_proyecto=' + this.codigoProject).subscribe((data: any) => {
      this.data = new MatTableDataSource<Tickets>(data);

      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    })
  }

  doFilter(value: any){
    this.data.filter = value.trim().toLocaleLowerCase();
  }

  ngOnDestroy(): void {
    
  }

}
