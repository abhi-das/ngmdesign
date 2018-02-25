import { Component, OnInit } from '@angular/core';

import { Todo } from './todos/todo';
import { TodoDataService } from './todos/todo-data.service';

import { Category } from './categories/category';
import { CategoryDataService } from './categories/category-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService, CategoryDataService]
})
export class AppComponent {

	newTodo: Todo = new Todo();
	newCategory: Category = new Category();
	selectedCategory: Category;

	constructor(private _todoDataSrv: TodoDataService, 
		private _categoryDataSrv: CategoryDataService) {

	}

	addCategory() {

		this._categoryDataSrv.addCategory(this.newCategory);
		this.newCategory = new Category();

	}

	addInitCategory(catg: Category) {

		this._categoryDataSrv.addCategory(catg);

	}

	get categories() {
		return this._categoryDataSrv.getAllCategories();
	}

	addInitItem(itm: Todo) {
		this._todoDataSrv.addTodo(itm);
	}

	get todos() {
		return this._todoDataSrv.getAllTodos();
	}

	onSelect(catg: Category) {
		this.selectedCategory = catg;
	}

	get todosForCat() {
		return this._todoDataSrv.getByCategory(this.selectedCategory.id);
	}

	ngOnInit() {

		let initCat = new Category();
		initCat = { 'name': 'Fruit', 'id': null };
		this.addInitCategory(initCat);

		initCat = { 'name': 'Veggies', 'id': null };
		this.addInitCategory(initCat);

		let initItem = new Todo();
		initItem = { 'id': null, 'title': 'apple', 'complete': false, category: 1};
		this.addInitItem(initItem);

		initItem = { 'id': null, 'title': 'banana', 'complete': false, category: 1};
		this.addInitItem(initItem);

	}

}
