import { Component, Input } from '@angular/core';
import { JobExperience } from '../../data/job-experience';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';

@Component({
	selector: 'app-portfolio-card',
	standalone: true,
	imports: [SkillTagComponent],
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
		skills: [],
	};
}
