import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from "rxjs/operators";
import { Historial } from '../assets/historial';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  // apiURL = 'http://localhost:3000';
  apiURL = environment.apiUrl
  data: any;
  ticket='?id_ticket='

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute, private router: Router) { }
  httpOptions={
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

  Historial_ticket(id: any): Observable<Historial>{
    return this.http.get<Historial>(this.apiURL + '/historial_ticket' + this.ticket + id)
  }

  historial(): Observable<Historial>{
    return this.http.get<Historial>(this.apiURL + '/historial_ticket')
  }

  createHistorial(id: any): Observable<Historial>{
    return this.http.post<Historial>(this.apiURL + '/historial_ticket', JSON.stringify(id), this.httpOptions).pipe(retry(1),catchError(this.handleError));
  
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
