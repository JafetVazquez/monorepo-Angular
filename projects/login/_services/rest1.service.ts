import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Person } from "../_shared/person";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Rest1Service {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  };

  getUsers(): Observable<Person>{
    return this.http.get<Person>(this.apiURL + '/people').pipe(retry(1), catchError(this.handleError));
  }

  getUser(id: any): Observable<Person>{
    return this.http.get<Person>(this.apiURL + '/people/' + id).pipe(retry(1), catchError(this.handleError));
  }

  createUser(user: any): Observable<Person>{
    return this.http.post<Person>(this.apiURL + '/people', JSON.stringify(user), this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  updateUser(id: any, user: any): Observable<Person>{
    return this.http.put<Person>(this.apiURL + '/people/' + id, JSON.stringify(user), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  deleteUser(id: any){
    return this.http.delete<Person>(this.apiURL + '/people/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
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
