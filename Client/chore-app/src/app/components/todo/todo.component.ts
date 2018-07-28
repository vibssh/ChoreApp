import { TodoService } from './../../service/todo.service';
import { IToDo } from './../../interface/i-to-do';
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interface/i-category';


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    todos:IToDo[] =[];
    categories: ICategory[]=[];
    isDone: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
      this.getTodos();
  }

  getTodos() {
    this.todos = this.todoService.getTodoList();
    this.todos.sort(function(a:IToDo, b:IToDo){
        return a.catId - b.catId;
    });
  }

  doneTodo(todo){
    todo.isDone = true; // Adding Class done
    let catDeductId = todo.catId - 1; // catId is 1, 2 so deducting 1 to get Index
        this.todoService.category[catDeductId]["catCount"] -= 1;
    }
  }

