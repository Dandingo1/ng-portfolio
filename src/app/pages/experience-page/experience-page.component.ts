import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';
import { JobExperience, jobExperiences } from '../../data/job-experience';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-experience-page',
	standalone: true,
	imports: [PortfolioCardComponent],
	templateUrl: './experience-page.component.html',
	styleUrl: './experience-page.component.css',
})
export class ExperiencePageComponent {
	experienceArray: JobExperience[] = jobExperiences;

	constructor(
		private title: Title,
		private meta: Meta
	) {
		this.title.setTitle('Experience | Portfolio');

		this.meta.updateTag({
			name: 'description',
			content: 'List of my previous experience at several companies.',
		});
	}
}
