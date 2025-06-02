import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project, projects } from '../../data/projects';

@Component({
	selector: 'app-projects-page',
	standalone: true,
	imports: [ProjectCardComponent],
	templateUrl: './projects-page.component.html',
	styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {
	projects: Project[] = projects;
}
