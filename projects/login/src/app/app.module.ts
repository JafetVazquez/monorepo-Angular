import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppInitService } from "./app-init.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdmminComponent } from './board-admmin/board-admmin.component';
import { BoardGestorComponent } from './board-gestor/board-gestor.component';
import { BoardUser1Component } from './board-user1/board-user1.component';
import { BoardUser2Component } from './board-user2/board-user2.component';
import { authInterceptorProviders } from "../../_helpers/auth.interceptor";
import swal from 'sweetalert';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { EmployeesService } from "../../_services/employees.service";
import { PostsComponent } from './posts/posts.component';
import { PostsService } from "../../_services/posts.service";
import { CommentsComponent } from './posts/comments/comments.component';
import { TodoComponent } from './board-user2/todo/todo.component';
import { DogsComponent } from './dogs/dogs.component';
import { MiniCRUDComponent } from './mini-crud/mini-crud.component';
import { CrudComponent } from './CRUD/crud/crud.component';
import { AddEmployeeComponent } from './CRUD/add-employee/add-employee.component';
import { EditEmployeeComponent } from './CRUD/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './CRUD/view-employee/view-employee.component';
import { RolDirective } from './directives/rol.directive';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminComponent } from './reg_log/admin/admin.component';
import { ModeratorComponent } from './reg_log/moderator/moderator.component';
import { UserComponent } from './reg_log/user/user.component';
import { MainComponent } from './reg_log/main/main.component';
import { InicioSesionComponent } from './reg_log/inicio-sesion/inicio-sesion.component';
import { PerfilComponent } from './reg_log/perfil/perfil.component';
import { RegistorComponent } from './reg_log/registor/registor.component';

export function initializeApp1(appInitService: AppInitService){
  return(): Promise<any> => {
    return appInitService.Init();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdmminComponent,
    BoardGestorComponent,
    BoardUser1Component,
    BoardUser2Component,
    NavbarComponent,
    PostsComponent,
    CommentsComponent,
    TodoComponent,
    DogsComponent,
    MiniCRUDComponent,
    CrudComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    RolDirective,
    AdminComponent,
    ModeratorComponent,
    UserComponent,
    MainComponent,
    InicioSesionComponent,
    PerfilComponent,
    RegistorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [authInterceptorProviders, EmployeesService, PostsComponent, AppInitService, { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
