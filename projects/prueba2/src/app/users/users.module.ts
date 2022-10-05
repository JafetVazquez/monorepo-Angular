import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    User1Component,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    User1Component
  ]
})
export class UsersModule { }
