import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactLinksComponent } from '../contact-links/contact-links.component';

@Component({
	selector: 'nav-bar',
	standalone: true,
	imports: [ContactLinksComponent, RouterLink, RouterLinkActive],
	templateUrl: './nav-bar.component.html',
	styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
