import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../_services/user.service";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  content: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getGestorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
