import { Component, OnInit } from '@angular/core';
import { Projects } from "../../../assets/projects";
import { ProjectsService } from "../../../services/projects.service";
import { Router } from "@angular/router";

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
      this.router.navigate(['/proyectos'])
    })
  }

}
