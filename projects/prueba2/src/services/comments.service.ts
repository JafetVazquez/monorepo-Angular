import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    return this.http.get(url)
  }

  getPosts(){
    return this.getQuery('posts')
  }

  Comentarios(id = 5){
    return this.getQuery(`posts/${id}/comments`)
  }
}
