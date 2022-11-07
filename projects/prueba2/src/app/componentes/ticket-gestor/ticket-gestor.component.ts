import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";

@Component({
  selector: 'app-ticket-gestor',
  templateUrl: './ticket-gestor.component.html',
  styleUrls: ['./ticket-gestor.component.css']
})
export class TicketGestorComponent implements OnInit {

  apiURL = 'http://localhost:3000/tickets'
  data: any;
  codigoProject = this.activatedRoute.snapshot.params['codigo']
  ticketsProject: any = {};
  nombreProject: string = '';

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
    // this.ticketsService.getTicketsByProject(this.codigoProject).subscribe((data: {}) => {
    //   this.ticketsProject = data;
    //   console.log(data);
      
    // });
    
  }

}
