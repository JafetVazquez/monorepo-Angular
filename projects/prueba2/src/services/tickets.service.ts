import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tickets } from "../assets/tickets";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
      'User-Agent': 'custom/non-standard'
      
    })
  };

  getTickets(): Observable<Tickets>{

    return this.http.get<Tickets>(this.apiURL + '/tickets', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  createTicket(id: any): Observable<Tickets>{
    return this.http.post<Tickets>(this.apiURL + '/tickets', JSON.stringify(id), this.httpOptions).pipe(retry(1),catchError(this.handleError));
  }

  updateTicket(id: any): Observable<Tickets>{
    return this.http.put<Tickets>(this.apiURL + '/tickets' + id, JSON.stringify(id), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  deleteTicket(id: any){
    return this.http.delete<Tickets>(this.apiURL + '/tickets' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }


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
