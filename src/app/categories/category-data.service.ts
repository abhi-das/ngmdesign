import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryDataService {

	// Placeholder for last id
	lastId: number = 0;

	// Plceholder for category's
	categories: Category[] = [];

  	constructor() { }

  	// Simulate POST /categories
  	addCategory(category: Category): CategoryDataService {

  		if(!category.id) {
  			category.id = ++this.lastId;
  		}
  		this.categories.push(category);
  		return this;
  	}

  	// Simulate GET /categories
  	getAllCategories(): Category[] {

  		return this.categories;

  	}
}
