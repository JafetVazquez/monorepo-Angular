import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: string = '';
  folio: string = '';
  // forms = FormGroup;

  // @Input() ticketData = {
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

  ticketData = new FormGroup({
    id: new FormControl(''),
    folio: new FormControl(''),
    titulo: new FormControl(''),
    coordenadas: new FormControl(''),
    evidencias: new FormControl(''),
    descripcion: new FormControl(''),
    comentario_t: new FormControl(''),
    fecha_creacion: new FormControl(''),
    fecha_atendido: new FormControl(''),
    fecha_asignado: new FormControl(''),
    fecha_proceso: new FormControl(''),
    fecha_resuelto: new FormControl(''),
    fecha_validado: new FormControl(''),
    fecha_cancelado: new FormControl(''),
    ticket_superior: new FormControl(''),
    ticket_usariocreador: new FormControl(''),
    ticket_especialistaasignado: new FormControl(''),
    ticket_tipoprioridad: new FormControl(''),
    ticket_tipopstatus: new FormControl(''),
    ticket_proyecto: new FormControl(''),
    ticket_areaorigen: new FormControl('')
  })

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined;

  constructor(public ticketsService: TicketsService, public router: Router) { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    this.id = new Date().getMilliseconds().toString();

    this.folio = new Date().getTime().toString();
  }

  addTicket(){
    this.ticketsService.createTicket(this.ticketData).subscribe((data: {}) => {
      this.router.navigate(['/tickets'])
    });
  }

}
