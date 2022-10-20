import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TodosService } from "../../../_services/todos.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-board-user2',
  templateUrl: './board-user2.component.html',
  styleUrls: ['./board-user2.component.css']
})
export class BoardUser2Component implements OnInit {
  todos: any[] = [];

  constructor(private todosService: TodosService, private router: Router) { 
    this.todosService.getTodo().subscribe((data: any) => {
      this.todos = data;      
    })
  }

  showTodo(id: string, title: string, completed: string){
    //this.router.navigate(['about', id, 'all']);
    //console.log(id);

    this.msgAlert(title, id, completed)
  }

  msgAlert = (title: string, id: string, completed: string) => {
    Swal.fire({
      icon: 'info',
      html: '<h1 class="mb-3" align="center">' + id + '</h1>' +
            '<b><h6 class="mb-3" align="left">Título:</h6></b>' +
            '<i><h6 class="mb-3" align="justify">' + title + '</h6></i>' +
            '<b><h6 class="mb-3" align="left">Completed:</h6></b>' +
            '<i><h6 class="mb-3" align="justify">' + completed + '</h6></i>',
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
      confirmButtonColor: '#4b5320',
    })
  }

  ngOnInit(): void {
  }

}
