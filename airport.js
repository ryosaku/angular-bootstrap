import {Component} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'

@Component({
	selector: 'airport',
	template: `
			<input #country (keyup.enter)='search(country.value)'>
			<button (click)='search(country.value)'>Search</button>
			<ul>
				<li *ngFor='#a of data'>
					{{a.code}} - {{a.name}}
				</li>
			</ul>
	`
})

class Airport{
	search(c){
		fetch("http://130.211.200.95/search-by-country?name=" + c).then(r => r.json()).then(d => console.log(d))
}

bootstrap(Airport);