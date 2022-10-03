import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';



@NgModule({
  declarations: [
    User1Component,
    DarkModeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    User1Component
  ]
})
export class UsersModule { }
