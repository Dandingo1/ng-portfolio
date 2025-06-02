import { Component, Input } from '@angular/core';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';
import { Project } from '../../data/projects';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [SkillTagComponent],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
	@Input({ required: true }) project: Project = {
		title: '',
		description: '',
		image: '',
		url: '',
		skills: [],
	};
}
