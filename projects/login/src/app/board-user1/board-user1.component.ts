import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import Swal from "sweetalert2";


@Component({
  selector: 'app-board-user1',
  templateUrl: './board-user1.component.html',
  styleUrls: ['./board-user1.component.css']
})
export class BoardUser1Component{
  resultado!: string;

  formContact = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit(){
    if(this.formContact == null){
      this.msgAlert('error', 'Error', 'Contesta el formulario')
    }else{

      if(this.formContact.valid){

        this.msgAlert('success', 'Éxito', 'Datos válidos')
        this.resultado = "datos válidos";
      }else{
        //alert("datos noob");
        this.msgAlert('error', 'Error', 'Datos inválidos')
        this.resultado = "datos inválidos";
      }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  msgAlert = (icon: any, title: any, text: any) => {
    Swal.fire({
      icon,
      title,
      text
    })
  }

  boton(){
    this.msgAlert('question', '¿?', 'Has presionado el botón erróneo')
  }

}
