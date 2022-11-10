import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from './app.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { CommentsComponent } from './componentes/comments/comments.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { DataTablesModule } from "angular-datatables";
import { TicketsComponent } from './componentes/tickets/tickets.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { Sidebar2Component } from './componentes/sidebar2/sidebar2.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditTicketComponent } from './componentes/edit-ticket/edit-ticket.component';
import { TicketGestorComponent } from './componentes/ticket-gestor/ticket-gestor.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ProfileComponent } from './componentes/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RecuperarContrasenaComponent,
    LoginComponent,
    RegistrarComponent,
    TicketComponent,
    CommentsComponent,
    HistorialComponent,
    TicketsComponent,
    SidebarComponent,
    Sidebar2Component,
    DashboardComponent,
    EditTicketComponent,
    TicketGestorComponent,
    ProyectosComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
