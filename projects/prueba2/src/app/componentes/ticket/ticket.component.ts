import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Tickets } from "../../../assets/tickets";
import { Projects } from "../../../assets/projects";
import { ProjectsService } from "../../../services/projects.service";
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  apiURL = environment.apiUrl
  id: string = '';
  folio: string = '12345678';
  // area: string = '';

  autor: number = 0;
  proyecto: number = 0;
  area: number = 3;
  especialista: number = 1;
  prioridad: number = 1;
  estatus: number = 1;
  coordenadas: string = 'coordenadas aqfdsaf';

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined = '';
  ticketModel = new Tickets("", "", this.folio, "", this.coordenadas, "", "", "", "", "", "", "", "", null, null, this.area, this.especialista, this.prioridad, this.estatus);
  // ticketModel = new Tickets("", "", this.folio, "", "", this.todayWithPipe, "", "", "", "", "", "", "", this.autor, this.proyecto, this.area, this.especialista, this.prioridad, this.estatus)
  projects: any[] = [];
  estatusTicket: any[] = [];
  users: any[] = [];
  // projects: any = {};
  projectSelected = '';

  constructor(private ticketsService: TicketsService, private router: Router, private projectsService: ProjectsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    this.id = new Date().getMilliseconds().toString();
    // console.log(this.id);
    

    this.folio = new Date().getTime().toString();
    
    this.projectsService.getProjects().subscribe((data: any) => {
      this.projects = data;
      // console.log(this.projects);
    })

    this.http.get<any>(this.apiURL + '/estatus/').subscribe((data: any) => {
      this.estatusTicket = data;      
    })

    this.http.get<any>(this.apiURL + '/usuario/').subscribe((data: any) => {
      this.users = data;
      // console.log(data);
      
    })
    
  }

  addTicket(){
    this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
      console.log(data);
      
      // this.router.navigate(['/tickets'])
    });
  }

  formSend(){
    console.log("formulario enviado: ", this.ticketModel);
    alert("enviado");
  }

  submit(){
      // console.log("formulario enviado: ", this.ticketModel);

    this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
      // console.log("formulario enviado: ", this.ticketModel);

      this.router.navigate(['/tickets']);
      this.msgAlert('success', 'Ticket creado!')
    })
  }

  // get project
  getProjects(){
    this.projectsService.getProjects().subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    })
  }

  msgAlert = (icon: any, title: any) => {
    // Swal.fire({
    //   icon:'success',
    //   title: 'Producto agregado correctamente',
    // })

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: title
    })
  }
}
