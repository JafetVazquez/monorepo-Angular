import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getData(){
    const url = `https://dog.ceo/api/breeds/image/random`
    return this.http.get(url);
  }
}
