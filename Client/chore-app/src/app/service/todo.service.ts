import { ICategory } from './../interface/i-category';
import { IToDo } from './../interface/i-to-do';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    category: ICategory[] = [
        {catId: 1, catName: "Personal", catCount: 0},
        {catId: 2, catName: "Business", catCount: 0}
    ];

    todoList: IToDo[] = [
        {id: 1, todoTitle: "Get Milk", catId: 1},
        {id: 2, todoTitle: "Get Paper", catId: 1},
        {id: 3, todoTitle: "Prepare Slides", catId: 2},
        {id: 4, todoTitle: "Buy kids shoes", catId: 1},
        {id: 5, todoTitle: "Submit Report", catId: 2}
    ];
  constructor() { }

  getCategories<ICategory>(){
      return this.category;
  }

  getTodoList<IToDo>(){
      return this.todoList;
  }
}
