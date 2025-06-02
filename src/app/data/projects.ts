export interface Project {
	title: string;
	description: string;
	image: string;
	url: string;
	skills: string[];
}

export const projects = [
	{
		title: 'Kanban Manager',
		description:
			'Created an Angular-based drag-and-drop task management board.' +
			'\nUsed Firestore to sync data in real time, deployed app to Firebase Hosting.',
		image: '/Users/User1/Projects/Portfolio/ng-portfolio/src/app/assets/kanban-fire.png',
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
		image: '',
		url: '',
		skills: ['React', 'C#', 'Vite', 'TailwindCSS'],
	},
];
