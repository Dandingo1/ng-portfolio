import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';
import { JobExperience, jobExperiences } from '../../data/job-experience';

@Component({
	selector: 'app-experience-page',
	standalone: true,
	imports: [PortfolioCardComponent],
	templateUrl: './experience-page.component.html',
	styleUrl: './experience-page.component.css',
})
export class ExperiencePageComponent {
	experienceArray: JobExperience[] = jobExperiences;
}
