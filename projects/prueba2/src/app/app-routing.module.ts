import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { User1Component } from "./users/user1/user1.component";
import { RecuperarContrasenaComponent } from "./componentes/recuperar-contrasena/recuperar-contrasena.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },

    {
        path: 'recuperar_contrasena',
        component: RecuperarContrasenaComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}