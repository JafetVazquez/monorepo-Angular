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

  codigo = this.activatedRoute.snapshot.params['codigo'];
  folio!: string;
  // projectData: any = {};
  projectData: any[] = [];

  constructor(private projectsService: ProjectsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.projectsService.getProjects().subscribe((data: any) => {
      this.projectData = data;
    });
  }

  // Ticket By project
  ticketByProject(codigo: string){
    this.router.navigate(['proyecto', codigo,'tickets'])
  }

  ngOnInit(): void {

  

  }

}
