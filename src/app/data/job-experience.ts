export interface JobExperience {
	title: string;
	subtitle?: string;
	dateRange: string;
	company: string;
	location: string;
	description: string[];
	skills: string[];
}

export const jobExperiences: JobExperience[] = [
	{
		// Focus on IT Orders
		title: 'Software Engineer',
		dateRange: '08/2022 - 11/2024',
		company: 'Cisco Systems Inc',
		location: 'US, Remote',
		description: [
			'Built reusable UI components and implemented NgRx for state management, improving performance and maintainability.',
			'Contributed to CI/CD workflows using CircleCI to automate unit and E2E testing (Jest, Cypress) and streamline frontend deployments.',
			'Integrated RESTful APIs to manage partner subscription data, support scheduling, and session visibility features',
			'Created and implemented feature flags using Split.io to support A/B testing and safer, incremental feature rollouts.',
			'Practiced Test-Driven Development (TDD) using Jest for unit tests and Cypress for end-to-end coverage of user flows (80%+ line coverage).',
			'Participated in sprint ceremonies, estimated effort via story points, and collaborated cross-functionally with designers and backend developers in Agile teams.',
		],
		skills: [
			'Typescript',
			'HTML',
			'CSS',
			'Angular',
			'NgRx',
			'RxJs',
			'AWS',
			'Java',
		],
	},
	{
		// Focus on PX-Cloud
		title: 'Software Engineer Intern',
		dateRange: '08/2021 - 07/2022',
		company: 'Cisco Systems Inc',
		location: 'US, Remote',
		description: [
			'Developed and maintained reusable UI components using Angular, TypeScript, and NgRx ' +
				'in amonolithic architecture to ensure consistency and performance across PX Cloud.',
			'Collaborated with UX designers using Figma to review and prototype UI workflows. ' +
				'Worked with a component team to create and maintain reusable UI components using Storybook, ' +
				'aligning with accessibility and design standards.',
			"Followed front-end security best practices including input sanitization, and Angular's built-in protections.",
			'Employed Git and GitHub for version control and participated in code reviews and continuous integration practices.',
		],
		skills: [
			'Typescript',
			'HTML',
			'CSS',
			'Angular',
			'NgRx',
			'RxJs',
			'AWS',
			'Java',
		],
	},
	{
		title: 'Software Engineer Intern',
		dateRange: '06/2020 - 08/2020',
		company: 'RealmOne',
		location: 'Columbia, MD',
		description: [
			'Revamped the homepage using HTML, CSS, and Angular, aligning UI design with modern web and ' +
				'responsive practices. Worked closely with designers and engineers in daily scrums to implement new ' +
				'features and refine designs.',
		],
		skills: ['Typescript', 'HTML', 'CSS', 'Angular', 'SQL', 'Java'],
	},
];
