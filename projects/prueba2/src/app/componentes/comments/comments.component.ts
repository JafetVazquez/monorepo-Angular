import { Comment } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CommentsService } from "../../../services/comments.service";
import { HttpClient } from "@angular/common/http";

import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Comments } from 'projects/prueba2/src/assets/comment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  public respuesta:any = [];
  public comentarios:any = [];
  comentarioText!:string;
  public form!: FormGroup;

  
  crearComment!: FormGroup;

  apiURL = 'http://localhost:3000/comments';
  
  id: string = '';
  folioNull: string = '';
  idComment = this.activatedRoute.snapshot.params['id'];
  folio= this.activatedRoute.snapshot.params['folio'];
  comments: any = [];
  todayWithPipe: string | null | undefined = '';
  CommentModel = new Comments("", "", this.idComment, "", "", "",  "", "");
  pipe = new DatePipe('en-US');

  constructor(private commentsService: CommentsService, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {

    this.commentsService.getCommentsId(this.idComment).subscribe((data: any) => {
      this.comments = data;

    })
  
  }

  ngOnInit(): void {

    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
    
   this.crearComment= new FormGroup({
    'id': new FormControl(""),
    'contenido_comentario': new FormControl(""),
    'id_ticket': new FormControl(""),
    'comentario_usuario': new FormControl(""),
    'fecha_comentario':new FormControl(""),
    'fecha_creacion': new FormControl(""),
    'fecha_culminacion': new FormControl(""),
    'estatus': new FormControl("")
  });


    this.crearComment= this.formBuilder.group({
      // 'id_comentario': [""],
      'contenido_comentario':[""] ,
      // 'id_ticket':[""],
      // 'comentario_usuario':[""],
      // 'fecha_comentario':[""],
      // 'fecha_creacion':[""],
      // 'fecha_culminacion':[""],
      // 'estatus': [""],
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


  enviarData(){
      this.commentsService.comment(this.apiURL,
      {
        text: this.crearComment.value.contenido_comentario
      }
      )
      .subscribe(data => {
        //console.log('Comentario enviado!!!');
        this.crearComment.reset();
        console.log('Enviar datos', this.crearComment);
      })
  }


  addComment(){
    this.commentsService.createComment(this.CommentModel).subscribe((data: {}) => {

    })
  }

  submit(){
    this.commentsService.createComment(this.CommentModel).subscribe((data: {}) => {
      // console.log(data);
      console.log("formulario enviado:", this.CommentModel);
      
      this.msgAlert('success', 'Comentario enviado')
      window.location.reload()
      // this.router.navigate(['/', this.idComment]);
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
