import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css',
})
export class HomePageComponent {
	constructor(
		private title: Title,
		private meta: Meta
	) {
		this.title.setTitle('Daniel Dominguez | Software Engineer');
		this.meta.updateTag({
			name: 'description',
			content:
				'Portfolio of Daniel Dominguez - Software Engineer with about 3 years of experience.',
		});
	}
}
