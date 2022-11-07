import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProjectsService } from "../../../services/projects.service";
import { Projects } from "../../../assets/projects";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  folio: string = '';
  // projectData: any = {};
  projectData: any[] = [];

  constructor(private projectsService: ProjectsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.projectsService.getProjects().subscribe((data: any) => {
      this.projectData = data;
    });
  }

  ngOnInit(): void {

  

  }

}
