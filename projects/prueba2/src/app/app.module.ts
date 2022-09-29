import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from "./users/users.module";

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { User1Component } from './users/user1/user1.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    RouterModule.forRoot([
      {path: 'user1', component: User1Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
