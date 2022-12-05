import { Component, Input, OnInit } from '@angular/core';
import { HistorialService } from 'projects/prueba2/src/services/historial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  

  historialTicket: any[]=[];
  @Input() id: any;
  id_ticket=this.activatedRouter.snapshot.params['id'];

  // id_ticket=2;


  constructor(private historialService: HistorialService, private activatedRouter: ActivatedRoute, private router: Router ) {
    this.historialService.Historial_ticket(this.id_ticket).subscribe((data: any)=>{
      this.historialTicket = data;
      console.log(this.historialTicket);
    })
   }

  ngOnInit(): void {
  }

  historialById(id_ticket: string){
    
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
}
