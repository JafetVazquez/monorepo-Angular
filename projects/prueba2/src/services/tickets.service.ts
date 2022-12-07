import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tickets } from "../assets/tickets";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectsService } from "./projects.service";
import { ProyectosComponent } from "../app/componentes/proyectos/proyectos.component";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  // apiURL = 'http://localhost:3000';
  apiURL = environment.apiUrl
  idProject = this.activatedRoute.snapshot.params['id']
  tickets: any = {};

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
      // 'User-Agent': 'custom/non-standard'
      
    })
  };

  // get Tickets
  getTickets(): Observable<Tickets[]>{

    return this.http.get<Tickets[]>(this.apiURL + '/ticket/', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // get tickets by id
  getTicketById(id: any): Observable<Tickets>{
    return this.http.get<Tickets>(this.apiURL + '/ticket/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // get ticket from id projects
  getTicketsByProject(idProject: any): Observable<Tickets>{
    return this.http.get<Tickets>(this.apiURL + '/proyecto/' + idProject).pipe(retry(1), catchError(this.handleError));
  }

  // create Ticket
  createTicket(id: any): Observable<Tickets>{
    return this.http.post<Tickets>(this.apiURL + '/ticket/', JSON.stringify(id), this.httpOptions).pipe(retry(1),catchError(this.handleError));
  }

  // update Ticket
  updateTicket(id: any, data: any): Observable<Tickets>{
    return this.http.put<Tickets>(this.apiURL + '/ticket/' + id + '/', JSON.stringify(data), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // delete Ticket
  deleteTicket(id: any){
    return this.http.delete<Tickets>(this.apiURL + '/ticket/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // handleError
  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error code: ${error.status} \nMessage: ${error.message}`
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    })
  }
}
