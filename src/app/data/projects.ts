export interface Project {
	title: string;
	description: string;
	image: string;
	url: string;
	skills: string[];
}

export const projects: Project[] = [
	{
		title: 'Kanban Manager',
		description:
			'Created an Angular-based drag-and-drop task management board.' +
			'\nUsed Firestore to sync data in real time, deployed app to Firebase Hosting.',
		image: '/kanban-fire.png',
		url: 'https://kanbanfire-ffcad.firebaseapp.com',
		skills: [
			'Angular',
			'Firebase',
			'Firestore',
			'Firebase Auth',
			'Material',
		],
	},
	{
		title: 'Application Tracker',
		description:
			'Created responsive UI with React and TailwindCSS and developed RESTful backend services' +
			'\nusing C#. Used Vite for fast frontend tooling and integrated GitHub Actions for CI/CD deployment.',
		image: 'application-tracker.png',
		url: 'https://github.com/danidomi-1/application-reporter',
		skills: ['React', 'C#', 'Vite', 'TailwindCSS'],
	},
	{
		title: 'Portfolio',
		description:
			'Developed a single-page application (SPA) using Angular, deployed on Firebase, to showcase recent projects and professional experience.' +
			'\nRegistered a custom domain via Cloudflare and implemented SEO best practices to improve search visibility and site performance.',
		image: '/ng-portfolio.png',
		url: 'https://github.com/danidomi-1/ng-portfolio',
		skills: [
			'Angular',
			'Material',
			'Bootstrap',
			'Github Actions',
			'Firebase Hosting',
			'Cloudflare DNS',
		],
	},
];
