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
	{ path: 'experience', component: ExperiencePageComponent },
	{ path: 'projects', component: ProjectsPageComponent },
];
