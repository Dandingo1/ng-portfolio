import { Component } from '@angular/core';

@Component({
    selector: 'app-resume-page',
    imports: [],
    templateUrl: './resume-page.component.html',
    styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {
	contactInformation = {
		name: 'Daniel Dominguez',
		homeAddress: 'Elkridge, MD',
		phoneNumber: '443-814-8958',
		emailAddress: 'dedominguez97@gmail.com',
	};
	programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'];
	technologies = [
		'Angular',
		'NgRx',
		'Jest',
		'Cypress',
		'AWS',
		'MySql',
		'Tableau',
		'DBT',
	];
}
