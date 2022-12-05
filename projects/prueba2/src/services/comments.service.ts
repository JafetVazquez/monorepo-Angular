import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Comments } from '../assets/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, retry, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  apiURL = 'http://localhost:3000';

  consulta="?id_ticket="

  idComment= this.activatedRoute.snapshot.params['id']
  
  comments: any ={};

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'ngrok-skip-browser-warning': 'ngrok-skip-browser-warning',
      'User-Agent': '*'
      
    })
  };

  // get comments
  getComments(): Observable<Comment>{
    return this.http.get<Comment>(this.apiURL).pipe(retry(1));
  }

  // get comments por id 
  getCommentsId(id:any): Observable<Comment>{
    return this.http.get<Comment>(this.apiURL + '/comments/' + this.consulta + id).pipe(retry(1));
  }


  comment(url: string, body: any):Observable<Comments>{
    return this.http.post<Comments>(url, body);
  }

  // create a new comment
  createComment(id: any): Observable<Comment>{
    return this.http.post<Comment>(this.apiURL + '/comments', JSON.stringify(id), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // Update comments
  updateComment(id: any, data: any): Observable<Comments>{
    return this.http.put<Comments>(this.apiURL + '/comments/' + this.consulta + id, JSON.stringify(data), this.httpOptions).pipe(retry(1), catchError(this.handleError));
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
