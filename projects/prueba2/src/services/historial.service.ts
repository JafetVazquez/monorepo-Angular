import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Historial } from '../assets/historial';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  apiURL = 'http://localhost:3000';
  data: any;
  ticket='?id_ticket='

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute, private router: Router) { }
  httpOptions={
    Headers: new HttpHeaders({
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


}
