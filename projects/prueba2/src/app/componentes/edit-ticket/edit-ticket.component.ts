import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Tickets } from "../../../assets/tickets";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  folio: string = '';
  ticketData: any = {};
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

  constructor(public ticketsService: TicketsService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.ticketsService.getTicketById(this.id).subscribe((data: {}) => {
      this.ticketData = data;
    })

    // this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    // this.id = new Date().getMilliseconds().toString();
    // console.log(this.id);
    

    // this.folio = new Date().getTime().toString();
    // console.log(this.folio);

    // console.log(this.todayWithPipe);
  }

  updateTicket(){
    if(window.confirm('¿Deseas actualizar este ticket?')){
      this.ticketsService.updateTicket(this.id, this.ticketData).subscribe((data) => {
        this.msgAlert('success', 'Ticket actualizado!')
        this.router.navigateByUrl('/ticket/tickets')
      })
    }
  }

  // addTicket(){
  //   this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
  //     console.log(data);
      
  //     // this.router.navigate(['/tickets'])
  //   });
  // }

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

  // formSend(){
  //   console.log("formulario enviado: ", this.ticketModel);
  //   alert("enviado");
  // }

  // submit(){
  //   this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
  //     console.log("formulario enviado: ", this.ticketModel);

  //     this.router.navigate(['/ticket/tickets'])
  //   })
  // }

}
