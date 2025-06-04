import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactLinksComponent } from './components/contact-links/contact-links.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavBarComponent, ContactLinksComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {}
