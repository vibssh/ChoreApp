import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    appTitle: string = "Chore";
    subTitle: string = "Keeping you on your toes";
    today: any;
    month: any =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit() {
      this.todayDate();
  }

  todayDate() {
    let d = new Date();
    let currentMonth = this.month[d.getMonth()];
    this.today = currentMonth + " " + d.getDate() + ", " + d.getFullYear();
  }
}
