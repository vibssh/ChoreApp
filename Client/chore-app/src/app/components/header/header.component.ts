import { ICategory } from './../../interface/i-category';
import { IToDo } from './../../interface/i-to-do';
import { TodoService } from './../../service/todo.service';
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

    todos:IToDo[] =[];
    categories: ICategory[]=[];
    catOneCount: number = 0;
    catTwoCount: number = 0;


  constructor(private todoService: TodoService) { }

  ngOnInit() {
      this.todayDate();
      this.getTodos();
      this.getCategories();
  }

  todayDate() {
    let d = new Date();
    let currentMonth = this.month[d.getMonth()];
    this.today = currentMonth + " " + d.getDate() + ", " + d.getFullYear();
  }

  getCategories() {
    this.categories = this.todoService.getCategories();
    this.categories[0]["catCount"]= this.catOneCount;
    this.categories[1]["catCount"]= this.catTwoCount;
  }

  getTodos() {
    this.todos = this.todoService.getTodoList();
    this.catOneCount = this.todos.filter(x=>x.catId===1).length;
    this.catTwoCount = this.todos.filter(x=>x.catId===2).length;
  }


}
