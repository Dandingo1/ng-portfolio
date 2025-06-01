import { Component } from '@angular/core';
import {
	JobExperience,
	PortfolioCardComponent,
} from '../../components/portfolio-card/portfolio-card.component';

@Component({
	selector: 'app-experience-page',
	standalone: true,
	imports: [PortfolioCardComponent],
	templateUrl: './experience-page.component.html',
	styleUrl: './experience-page.component.css',
})
export class ExperiencePageComponent {
	experienceArray: JobExperience[] = [];
}
