import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdmminComponent } from './board-admmin/board-admmin.component';
import { BoardGestorComponent } from './board-gestor/board-gestor.component';
import { BoardUser2Component } from './board-user2/board-user2.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from "./posts/comments/comments.component";
import { TodoComponent } from './board-user2/todo/todo.component';
import { DogsComponent } from './dogs/dogs.component';
import { CrudComponent } from './CRUD/crud/crud.component';
import { AddEmployeeComponent } from './CRUD/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './CRUD/view-employee/view-employee.component';
import { EditEmployeeComponent } from './CRUD/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'empleados',
    component: BoardAdmminComponent,
    pathMatch: 'full'
  },

  {
    path: 'employee/:id',
    component: BoardGestorComponent,
  },

  {
    path: 'todos',
    component: BoardUser2Component,
    pathMatch: 'full'
  },

  {
    path: 'posts',
    component: PostsComponent,
    pathMatch: 'full'
  },

  {
    path: 'posts/:id/comments',
    component: CommentsComponent,
    pathMatch: 'full'
  },

  {
    path: 'todos/:id/all',
    component: TodoComponent,
    pathMatch: 'full'
  },

  {
    path: 'nasa',
    component: DogsComponent,
    pathMatch: 'full'
  },

  {
    path: 'crud',
    component: ViewEmployeeComponent,
    pathMatch: 'full'
  },

  {
    path: 'ViewEmployee/:employeeId',
    component: ViewEmployeeComponent
  },

  {
    path: 'AddEmployee',
    component: AddEmployeeComponent
  },

  {
    path: 'EditEmployee:/employeeId',
    component: EditEmployeeComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
