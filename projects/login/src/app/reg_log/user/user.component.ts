import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../_services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  content: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser1Board().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
