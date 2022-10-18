import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined;

  constructor() { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }

}
