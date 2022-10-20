import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  title = "validaciones";
  angForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
   }

   createForm(){
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required]
    });

    this.angForm.controls["name"].valueChanges.subscribe(
      data => {
        console.log(data);
      }
    )
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.angForm.valid){
      console.log(this.angForm.value);
    }else{
      alert("llena todos los campos")
    }
  }

}
