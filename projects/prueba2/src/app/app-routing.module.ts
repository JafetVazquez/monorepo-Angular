import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { User1Component } from "./users/user1/user1.component";



const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'recuperar-contrasena',
        component: User1Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}