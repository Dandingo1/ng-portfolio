import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project, projects } from '../../data/projects';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-projects-page',
	standalone: true,
	imports: [ProjectCardComponent],
	templateUrl: './projects-page.component.html',
	styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {
	projects: Project[] = projects;

	constructor(
		private title: Title,
		private meta: Meta
	) {
		this.title.setTitle('Projects | Portfolio');

		this.meta.updateTag({
			name: 'description',
			content:
				'Showcase of my Angular projects and front-end development work.',
		});
	}
}
