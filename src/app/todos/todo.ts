export class Todo {
	id: number;
	title: string = '';
	complete: boolean = false;
	category: number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
