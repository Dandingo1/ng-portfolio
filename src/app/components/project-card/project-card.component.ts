import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../data/projects';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

type TextType = 'Repository' | 'Application';
@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [MatButtonModule, MatCardModule, MatChipsModule],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
	@Input({ required: true }) project: Project = {
		title: '',
		description: '',
		image: '',
		url: '',
		skills: [],
	};

	anchorText: TextType = 'Repository';

	ngOnInit(): void {
		if (this.project.url.includes('github')) {
			this.anchorText = 'Application';
		}
	}
}
