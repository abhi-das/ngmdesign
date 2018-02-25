import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

	//Placeholder for last id
	lastId: number = 0;

	// Placeholder for Todo's
	todos: Todo[] = [];

  	constructor() { }

  	// Simulate POST /todos
  	addTodo(todo: Todo): TodoDataService {
  		if(!todo.id) {
  			todo.id = ++this.lastId;
  		}
  		this.todos.push(todo);
  		return this;
  	}

  	getAllTodos(): Todo[] {
  		return this.todos;
  	}

  	getByCategory(id: number): Todo[] {
  		return this.todos.filter(todo => todo.category === id);
  	}

}
