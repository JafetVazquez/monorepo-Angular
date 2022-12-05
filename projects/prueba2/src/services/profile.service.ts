import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Profile } from "../assets/profile";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiURL = environment.apiUrl
  // apiURL = 'http://localhost:3000';
  // idUser = this.activatedRoute.snapshot.params['id'];
  idUser = this.activatedRoute.snapshot.params['id'];
  perfilData: any = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

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

  // get users
  getUsers(): Observable<Profile> {
    return this.http.get<Profile>(this.apiURL + '/users/', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // get user by id
  getUserById(id: string): Observable<Profile> {
    return this.http.get<Profile>(this.apiURL + '/users/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // update user
  updateUser(id: any, data: any): Observable<Profile> {
    return this.http.put<Profile>(this.apiURL + '/users/' + id, JSON.stringify(data), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // delete user
  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.apiURL + '/users/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }


  handleError(error: any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error code: ${error.status} \nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
