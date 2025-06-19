import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/about',
		pathMatch: 'full',
	},
	{ path: 'about', component: HomePageComponent },
	{
		path: 'experience',
		loadComponent: () =>
			import('./pages/experience-page/experience-page.component').then(
				(m) => m.ExperiencePageComponent
			),
	},
	{
		path: 'projects',
		loadComponent: () =>
			import('./pages/projects-page/projects-page.component').then(
				(m) => m.ProjectsPageComponent
			),
	},
	{ path: '**', redirectTo: 'about' },
];
