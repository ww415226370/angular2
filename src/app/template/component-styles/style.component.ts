import { Component } from '@angular/core';


@Component({
	templateUrl: './style.component.html',
	// template: `
	// 	<style>
	// 		h1 {
	// 			color: red;
	// 		}
	// 	</style>
	// 	<h1>颜色<h1>
	// `,
	// styleUrls: ['./style.component.css'],
	styles: ['h1 { color: blue; }']
})

export class StyleComponent {
	color: string;
	condition: boolean = true;
}