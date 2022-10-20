import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }

  getLink(){
    const url = `https://catfact.ninja/fact`;
    return this.http.get(url);
  }

}
