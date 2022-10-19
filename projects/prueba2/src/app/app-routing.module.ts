import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistrarComponent } from "./componentes/registrar/registrar.component";
import { User1Component } from "./users/user1/user1.component";
import { RecuperarContrasenaComponent } from "./componentes/recuperar-contrasena/recuperar-contrasena.component";
import { TicketComponent } from "./componentes/ticket/ticket.component";
import { CommentsComponent } from "./componentes/comments/comments.component";
import { HistorialComponent } from "./componentes/historial/historial.component";





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
        path:'registrar/ticket',
        component: TicketComponent
    },
    {
        path:'registrar/ticket/comments',
        component: CommentsComponent
    },
    {
        path:'registrar/ticket/historial',
        component: HistorialComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule{}