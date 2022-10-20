import { Component, OnInit } from '@angular/core';
import { DogsService } from "../../../_services/dogs.service";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  thumbnail: any;

  dataNasa: any = [];
  contenido = false;

  constructor(private api: DogsService) { }

  ngOnInit(): void {
    this.api.getQuery('').subscribe((data: any) => {
      this.dataImageDay(data);
    })
  }

  dataImageDay(data: any){
    if(data.url !== ''){
      this.dataNasa = data;
      console.log('this.dataNasa: ', this.dataNasa);
      this.contenido = true;
    }
  }

}
