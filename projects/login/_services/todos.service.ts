import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){ //obtener info mediante id en la url
    const url = `https://jsonplaceholder.typicode.com/${query}`
    return this.http.get(url);
  }

  getTodo(){
    return this.getQuery('todos')
  }

  getComments(id: string){
    const url2 = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
    return this.http.get(url2);
  }
}
