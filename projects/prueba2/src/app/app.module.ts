import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecuperarContrasenaComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
