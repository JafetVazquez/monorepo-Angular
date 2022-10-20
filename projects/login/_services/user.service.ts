import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any>{
    return this.http.get(API_URL + 'all', {
      responseType: 'text'
    });
  }

  getUser1Board(): Observable<any> {
    return this.http.get(API_URL + 'user1', {
      responseType: 'text'
    });
  }

  getUser2Board(): Observable<any> {
    return this.http.get(API_URL + 'user2', {
      responseType: 'text'
    });
  }

  getGestorBoard(): Observable<any>{
    return this.http.get(API_URL + 'gestor', {
      responseType: 'text'
    });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {
      responseType: 'text'
    });
  }
}
