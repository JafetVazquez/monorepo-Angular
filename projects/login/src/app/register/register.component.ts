import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../../_services/auth.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  /*form: any = {
    username: null,
    email: null,
    password: null
  }*/

  /*isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";*/

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {

        /*username: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]],

        email: ['', [
          Validators.required, Validators.email
        ]],

        password: ['', [
          Validators.required,
          Validators.minLength(6)
        ]],

        confirmPassword:['', Validators.required],*/

        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      }

      
    );
  }

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    

    // const { username, email, password } = this.form;

    // this.authService.register(username, email, password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   }
    // )
  }

  onReset(): void{
    this.submitted = false;
    this.form.reset();
  }
}
