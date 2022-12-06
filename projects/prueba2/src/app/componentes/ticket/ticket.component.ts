import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { TicketsService } from "../../../services/tickets.service";
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Tickets } from "../../../assets/tickets";
import { Projects } from "../../../assets/projects";
import { ProjectsService } from "../../../services/projects.service";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: string = '';
  folio: string = '';
  

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined = '';
  ticketModel = new Tickets("", "", "", "", "", this.todayWithPipe, "", "", "", "", "", "", "", "", "", "", "", "", "");
  projects: any[] = [];
  // projects: any = {};
  projectSelected = '';

  constructor(private ticketsService: TicketsService, private router: Router, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    this.id = new Date().getMilliseconds().toString();
    // console.log(this.id);
    

    this.folio = new Date().getTime().toString();
    // console.log(this.folio);

    // console.log(this.todayWithPipe);    
    
    // console.log(this.getProjects());
    
  }

  addTicket(){
    this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
      console.log(data);
      
      // this.router.navigate(['/tickets'])
    });
  }

  formSend(){
    console.log("formulario enviado: ", this.ticketModel);
    alert("enviado");
  }

  submit(){
    this.ticketsService.createTicket(this.ticketModel).subscribe((data: {}) => {
      console.log("formulario enviado: ", this.ticketModel);

      this.router.navigate(['/tickets'])
    })
  }

  // get project
  getProjects(){
    this.projectsService.getProjects().subscribe((data: any) => {
      // console.log(data);
      this.projects = data;
    })
  }
}
