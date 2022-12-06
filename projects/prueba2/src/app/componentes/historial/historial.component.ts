import { Component, Input, OnInit } from '@angular/core';
import { HistorialService } from 'projects/prueba2/src/services/historial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Historial } from 'projects/prueba2/src/assets/historial';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TicketsService } from 'projects/prueba2/src/services/tickets.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  
  public createHistorial!: FormGroup;
  historialTicket: any[]=[];

  @Input() id: any;
  id_ticket=this.activatedRouter.snapshot.params['id'];
  @Input() folio: any;
  f_ticket= this.activatedRouter.snapshot.params['folio']
  apiURL = 'http://localhost:3000';
  historialModel=new Historial("", this.id_ticket,"","","","");
  
  


  constructor(private historialService: HistorialService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder, private ticketsService: TicketsService ) {
    this.historialService.Historial_ticket(this.id_ticket).subscribe((data: any)=>{
      this.historialTicket = data;
      console.log(this.historialTicket);
      console.log(this.id_ticket);
      
      
    })
   }

  ngOnInit(): void {
  
    this.createHistorial = new FormGroup({
      id: new FormControl(""),
      id_ticket: new FormControl(this.id_ticket),
      id_usuario: new FormControl(""),
      fc_modificacion: new FormControl(""),
      id_estatus: new FormControl(""),
      id_especialista: new FormControl("")
    });

    // this.createHistorial= this.fb.group({
    //   'id': [] ,
    //   'id_ticket': this.id_ticket ,
    //   'id_usuario':[""] ,
    //   'fc_modificacion':[""] ,
    //   'id_estatus': [""] ,
    //   'id_especialista':[""] ,
    // })

  }

  addHistorial(){
    this.historialService.createHistorial(this.historialModel).subscribe((data: {}) => {
      console.log(data);
      
      // this.router.navigate(['/tickets'])
    });

   
  }

  // formSend(){
  //   console.log("formulario enviado: ", this.historialModel);
  //   alert("enviado");
  // }

  submit(){
    this.historialService.createHistorial(this.historialModel).subscribe((data: {}) => {
      console.log("formulario enviado: ", this.historialModel);

      this.msgAlert('success', 'Estatus actualizado')
      window.location.reload()

      //this.router.navigate(['/historial_ticket'])
    })
  }

  

  perfil(){
    this.alertaPerfil('info','Perfil...','Aquí estará la información del perfil')
  }

  alertaPerfil = (icon: any, title: any, text: any) => {
    Swal.fire({
      icon,
      title,
      text
    })
  }

  msgAlert = (icon: any, title: any) => {

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
