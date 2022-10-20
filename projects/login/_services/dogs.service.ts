import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public snippet: any;

  private url = `https://api.nasa.gov/planetary/apod?api_key=`;

  private apiKey = '47TjbMgZji5TnG2Iw5bhDGUaEiouAdQkltpy3uOT';
  private api = this.url + this.apiKey;

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = this.api + query;
    return this.http.get(url);
  }
  
}
