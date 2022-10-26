import { Component, OnInit } from '@angular/core';
import { Person } from 'projects/login/_shared/person';
import { ApiServiceService } from "../../../_services/api-service.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'httpGet Example';
  people!: Person[];
  Person = new Person();
  data: any;

  constructor(private apiService: ApiServiceService, private http: HttpClient) {
    this.http.get('http://localhost:3000/people').subscribe((data) => {
      this.data = data;
      // console.log(data);
      
    }, error => console.log(error)
    );
  }

  ngOnInit(): void {
    this.refreshPeople();
  }

  refreshPeople(){
    this.apiService.getPeople().subscribe(
      data => {
        this.people = data;
        console.log(data);
      }
    )
  }

  addPerson(){
    this.apiService.addPerson(this.Person).subscribe(
      data => {
        this.refreshPeople();
        console.log(data);
      }
    )
  }


}
