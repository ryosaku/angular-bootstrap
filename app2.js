import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
	selector: 'divider',
	template: `
			<input #number (keyup.enter)='search(number.value)'>
			<button (click)='search(number.value)'>Search</button>
			<ul>
				<li *ngFor='#x of result'>{{x}}</li>
			</ul>
	`
})

class Divider{


	search(v) {
		this.result = [];
		for(var i = 0; i <= v; i++){
			if(v % i == 0){
				this.result.push(i);
			}
		}
	}
}

bootstrap(Divider);