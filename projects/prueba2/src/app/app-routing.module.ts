import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistrarComponent } from "./componentes/registrar/registrar.component";
import { User1Component } from "./users/user1/user1.component";
import { RecuperarContrasenaComponent } from "./componentes/recuperar-contrasena/recuperar-contrasena.component";
import { TicketComponent } from "./componentes/ticket/ticket.component";
import { CommentsComponent } from "./componentes/comments/comments.component";
import { HistorialComponent } from "./componentes/historial/historial.component";
import { TicketsComponent } from "./componentes/tickets/tickets.component";
import { SidebarComponent } from "./componentes/sidebar/sidebar.component";
import { Sidebar2Component } from "./componentes/sidebar2/sidebar2.component";
import { DashboardComponent } from "./componentes/dashboard/dashboard.component";
import { EditTicketComponent } from "./componentes/edit-ticket/edit-ticket.component";
import { ProyectosComponent } from "./componentes/proyectos/proyectos.component";





const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'recuperar-contrasena',
        component: RecuperarContrasenaComponent,
        pathMatch: 'full'
    }, 
    {
        path: 'registrar',
        component: RegistrarComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'ticket',
        component: TicketComponent
    },
    {
        path:'ticket/comments',
        component: CommentsComponent
    },
    {
        path:'ticket/historial',
        component: HistorialComponent
    },
    {
        path:'ticket/tickets',
        component: TicketsComponent
    },
    {
        path:'ticket/tickets/edit/:id',
        component: EditTicketComponent
    },
    {
        path:'proyectos',
        component: ProyectosComponent
    },
    {
        path:'sidebar',
        component:SidebarComponent
    },
    {
        path:'sidebar2',
        component:Sidebar2Component
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule{}