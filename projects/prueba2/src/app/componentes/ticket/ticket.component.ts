import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Tickets } from "../../../assets/tickets";
import { Projects } from "../../../assets/projects";
import { ProjectsService } from "../../../services/projects.service";

// interface Tickets {
//   id: string;
//   folio: string;
//   titulo: string;
//   coordenadas: string;
//   evidencias: string;
//   descripcion: string;
//   comentario_t: string;
//   fecha_creacion: string;
//   fecha_atendido: string;
//   fecha_asignado: string;
//   fecha_proceso: string;
//   fecha_resuelto: string;
//   fecha_validado: string;
//   fecha_cancelado: string;
//   ticket_superior: string;
//   ticket_usariocreador: string;
//   ticket_especialistaasignado: string;
//   ticket_tipoprioridad: string;
//   ticket_tipopstatus: string;
//   ticket_proyecto: string;
//   ticket_areaorigen: string;
// }

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: string = '';
  folio: string = '';
  // forms = FormGroup;

  // ticketData: Tickets = {
  //   id: '',
  //   folio: '',
  //   titulo: '',
  //   coordenadas: '',
  //   evidencias: '',
  //   descripcion: '',
  //   comentario_t: '',
  //   fecha_creacion: '',
  //   fecha_atendido: '',
  //   fecha_asignado: '',
  //   fecha_proceso: '',
  //   fecha_resuelto: '',
  //   fecha_validado: '',
  //   fecha_cancelado: '',
  //   ticket_superior: '',
  //   ticket_usariocreador: '',
  //   ticket_especialistaasignado: '',
  //   ticket_tipoprioridad: '',
  //   ticket_tipopstatus: '',
  //   ticket_proyecto: '',
  //   ticket_areaorigen: ''
  // }

  // ticketData = new FormGroup({
  //   id: new FormControl(''),
  //   folio: new FormControl(''),
  //   titulo: new FormControl(''),
  //   coordenadas: new FormControl(''),
  //   evidencias: new FormControl(''),
  //   descripcion: new FormControl(''),
  //   comentario_t: new FormControl(''),
  //   fecha_creacion: new FormControl(''),
  //   fecha_atendido: new FormControl(''),
  //   fecha_asignado: new FormControl(''),
  //   fecha_proceso: new FormControl(''),
  //   fecha_resuelto: new FormControl(''),
  //   fecha_validado: new FormControl(''),
  //   fecha_cancelado: new FormControl(''),
  //   ticket_superior: new FormControl(''),
  //   ticket_usariocreador: new FormControl(''),
  //   ticket_especialistaasignado: new FormControl(''),
  //   ticket_tipoprioridad: new FormControl(''),
  //   ticket_tipopstatus: new FormControl(''),
  //   ticket_proyecto: new FormControl(''),
  //   ticket_areaorigen: new FormControl('')
  // })

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined = '';
  ticketModel = new Tickets("", this.folio, "", "", "", "", "", this.todayWithPipe, "", "", "", "", "", "", "", "", "", "", "", "", "");
  projects: any[] = [];
  // projects: any = {};
  projectSelected = '';

  constructor(private ticketsService: TicketsService, private router: Router, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    this.id = new Date().getMilliseconds().toString();
    console.log(this.id);
    

    this.folio = new Date().getTime().toString();
    console.log(this.folio);

    console.log(this.todayWithPipe);    
    
    console.log(this.getProjects());
    
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
    this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
      console.log("formulario enviado: ", this.ticketModel);

      this.router.navigate(['/tickets'])
    })
  }

  // get project
  getProjects(){
    this.projectsService.getProjects().subscribe((data: any) => {
      console.log(data);
      this.projects = data;
    })
  }
}
