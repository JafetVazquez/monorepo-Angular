import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  apiURL = 'http://localhost:3000/tickets'
  data: any;
  idProject = this.activatedRoute.snapshot.params['idProject']
  ticketsProject: any[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private ticketsService: TicketsService) {

    // get project id
    // this.activatedRoute.params.subscribe((params => {
    //   this.ticketsService.getTicketsByIdProjects(params.['idProject'], ['id']).subscribe((data: any) => {
    //     this.ticketsProject = data;
    //   })
    // }))
    
    this.http.get(this.apiURL).subscribe((data) => {
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
    $('.dateadded').on( 'change', function (ret :any) {
 
      var v = ret.target.value  // getting search input value
      
      $('#dataTables-example').DataTable().columns(3).search(v).draw();
  } );

  }

}
