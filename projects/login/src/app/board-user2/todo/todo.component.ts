import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TodosService } from "../../../../_services/todos.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  all: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodosService) { 
    this.activatedRoute.params.subscribe((params => {
      this.todoService.getComments(params['id']).subscribe((data: any) => {
        this.all = data;
      })
    }))
  }

  ngOnInit(): void {
  }

}
