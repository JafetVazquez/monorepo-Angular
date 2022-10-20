import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MiniCRUDService } from "../../../_services/mini-crud.service";

@Component({
  selector: 'app-mini-crud',
  templateUrl: './mini-crud.component.html',
  styleUrls: ['./mini-crud.component.css']
})
export class MiniCRUDComponent implements OnInit {

  constructor(private http: HttpClient, private miniCrud: MiniCRUDService) { }

  ngOnInit(): void {
  }

  

}
