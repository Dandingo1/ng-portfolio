import { Component, input } from '@angular/core';
import { JobExperience } from '../../data/job-experience';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-portfolio-card',
	standalone: true,
	imports: [
		MatButtonModule,
		MatCardModule,
		MatChipsModule,
		MatIconModule,
		MatListModule,
	],
	templateUrl: './portfolio-card.component.html',
	styleUrl: './portfolio-card.component.css',
})
export class PortfolioCardComponent {
	experience = input<JobExperience>({
		title: '',
		dateRange: '',
		company: '',
		location: '',
		description: [],
		skills: [],
	});
}
