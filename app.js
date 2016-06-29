import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
	selector: 'app',
	template: `
			<input #query (keyup)='autosearch($event)'>
			<button (click)='search(query)'>Search</button>
			{{country}}
	`
})

class App {
	constructor(){
		this.data = {
				th: 'Thailand',
				jp: 'Japan',
				us: 'United States of America',
				uk: 'United Kingdom'
		};
	}

	autosearch(e) {
		var v = e.target.value
		if (this.data[v] == null) {
			this.country = "Not Found";
		} else {
			this.country = this.data[v];
		}
	}

	search(t) {
		this.country = this.data[t.value];
	}
}

bootstrap(App);