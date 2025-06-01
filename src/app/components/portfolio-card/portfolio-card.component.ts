import { Component, Input } from '@angular/core';

export interface JobExperience {
	title: string;
	dateRange: string;
	company: string;
	location: string;
	description: string[];
}

@Component({
	selector: 'app-portfolio-card',
	standalone: true,
	imports: [],
	templateUrl: './portfolio-card.component.html',
	styleUrl: './portfolio-card.component.css',
})
export class PortfolioCardComponent {
	@Input({ required: true }) experience: JobExperience = {
		title: '',
		dateRange: '',
		company: '',
		location: '',
		description: [],
	};
}
