import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatBadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	newItem = '';
	completedCount = 0;
	openCount = 0;
	isUpdate = false;
	index: number = 0;
	item_list: {name: string, isCompleted: boolean}[] = [];

	constructor() {}

	addItem() {
		if (this.isUpdate) {
			if (this.newItem) {
				this.item_list[this.index].name = this.newItem;
				this.newItem = '';
				this.isUpdate = false;
			} else {
				
			}
		} else {
			if (this.newItem) {
				this.item_list.push({name: this.newItem, isCompleted: false});
				this.openCount++;
				this.newItem = '';
			} else {
				
			}
		}
	}

	onDelete(index: number) {
		this.item_list.splice(index, 1);
		this.newItem = '';
		this.openCount--;
	}

	onCompleted(index: number) {
		this.item_list[index].isCompleted = true;
		this.completedCount++;
		this.openCount--;
	}

	onUpdate(index: number, name: string) {
		this.isUpdate = true;
		this.index = index;
		this.newItem = name;
		this.item_list[index].name = this.newItem;
	}

}
