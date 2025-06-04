import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactLinksComponent } from './components/contact-links/contact-links.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavBarComponent, ContactLinksComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	constructor(
		private title: Title,
		private meta: Meta
	) {
		this.title.setTitle('My Developer Portfolio');
		this.meta.addTags([
			{
				name: 'description',
				content:
					'Personal portfolio site showcasing my front-end work.',
			},
			{ name: 'author', content: 'Daniel Dominguez' },
			{
				name: 'keywords',
				content:
					'Software Engineer, Angular, Portfolio, Frontend, Developer, JavaScript',
			},
		]);
	}
}
