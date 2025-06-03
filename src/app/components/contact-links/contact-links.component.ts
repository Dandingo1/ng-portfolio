import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-contact-links',
	standalone: true,
	imports: [MatButtonModule, MatIconModule],
	templateUrl: './contact-links.component.html',
	styleUrl: './contact-links.component.css',
})
export class ContactLinksComponent {}
