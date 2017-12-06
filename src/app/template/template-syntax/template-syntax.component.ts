import { Component } from '@angular/core';

class Item {
  id: number;
  name: string;
}

@Component({
	templateUrl: './template-syntax.component.html',
	styleUrls: ['./template-syntax.component.css']
})

export class TemplateSyntaxComponent {
	title: String = 'hello';
	newItem: String;
	newId: number;
	list: Item[] = [
  		{ id: 0,  name: 'Zero' },
  		{ id: 1, name: 'MrNice' },
  		{ id: 2, name: 'Narco' }
    ];
	show: boolean = true;
	currentItem: Item;

	constructor() {
		this.newItem = '';
		this.newId = this.list.length + 1;
	}

	saveItem() {
		if(this.newItem){
			this.list.push(<Item>{id: this.newId, name: this.newItem});
			this.newId++;
		}
	}

	removeItem(index: number) {
		this.list.splice(index, 1);
	}

	trackByList(index: number, item: Item) {
		return item.id;
	}

	chooseItem(item: Item) {
		this.currentItem = item;
	}

	callPhone(value: String) {
		console.log(value);
	}
}