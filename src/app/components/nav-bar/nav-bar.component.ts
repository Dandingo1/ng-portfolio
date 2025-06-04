import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
@Component({
	selector: 'nav-bar',
	standalone: true,
	imports: [MatButtonModule, MatListModule, RouterLink, RouterLinkActive],
	templateUrl: './nav-bar.component.html',
	styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
