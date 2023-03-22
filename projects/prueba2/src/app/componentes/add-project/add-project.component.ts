import { Component, OnInit } from '@angular/core';
import { Projects } from "../../../assets/projects";
import { ProjectsService } from "../../../services/projects.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projectModel = new Projects("","","","","","", 1)

  constructor(private projectService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.projectService.createProject(this.projectModel).subscribe((data: {}) => {
      this.msgAlert('success', 'Proyecto Registrado');
      this.router.navigate(['/proyectos'])
    })
  }

  msgAlert = (icon: any, title: any) => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: title
    })
  }

}
