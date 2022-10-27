import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  jobForm = this.fb.group({
    firstName: [''],
    lastName: [''],

    contact: this.fb.group({
      contactType: ['-1'],
      email: [''],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });

  preview: string = '';

  ngOnInit(): void {
  }

  save(){
    this.preview = JSON.stringify(this.jobForm.value)
  }

  get skillsForms(){
    return this.jobForm.get('skills') as FormArray;
  }

  addASkillFormGroup(){
    this.skillsForms.push(this.fb.group({
      programLanguage: [''],
      experience: [0],
    })
    );
  }

  removeSkillFormGroup(index: number){
    this.skillsForms.removeAt(index)
  }
}
