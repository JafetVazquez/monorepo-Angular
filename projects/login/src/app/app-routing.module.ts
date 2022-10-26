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
import { NgxPermissionsGuard } from "ngx-permissions";
import { RegistorComponent } from './reg_log/registor/registor.component';
import { InicioSesionComponent } from './reg_log/inicio-sesion/inicio-sesion.component';
import { AdminComponent } from './reg_log/admin/admin.component';
import { ModeratorComponent } from './reg_log/moderator/moderator.component';
import { UserComponent } from './reg_log/user/user.component';
import { PerfilComponent } from './reg_log/perfil/perfil.component';
import { ProfileComponent } from './profile/profile.component';
import { User2Component } from './user2/user2.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

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
    path: 'registrar',
    component: RegistorComponent,
    pathMatch: 'full'
  },

  {
    path: 'inicio_sesion',
    component: InicioSesionComponent,
    pathMatch: 'full'
  },

  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  },

  {
    path: 'moderador',
    component: ModeratorComponent,
    pathMatch: 'full'
  },

  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full'
  },

  {
    path: 'perfil',
    component: User2Component,
    pathMatch: 'full'
  },

  {
    path: 'crud',
    component: AddEmployeeComponent,
    pathMatch: 'full'
  },

  {
    path: 'user-list',
    component: UserListComponent,
    pathMatch: 'full'
  },

  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    pathMatch: 'full'
  },

  {
    path: 'ViewEmployee/:employeeId',
    component: AddEmployeeComponent
  },

  {
    path: 'AddEmployee',
    component: AddEmployeeComponent
  },

  {
    path: 'EditEmployee:/employeeId',
    component: EditEmployeeComponent
  },

  // {
  //   path: 'admin',
  //   component: ViewEmployeeComponent,
  //   canActivate: [NgxPermissionsGuard],
  //   data: {
  //     permissions: {
  //       only: ['ADMIN'],
  //       redirectTo: '/forbidden'
  //     }
  //   }
  // },

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
