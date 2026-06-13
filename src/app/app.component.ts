import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { NavbarComponentComponent } from './components/shared/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/shared/footer-component/footer-component.component';
import { CommonModule } from '@angular/common';
imports: [
  CommonModule,
  RouterOutlet,
  NavbarComponentComponent,
  FooterComponentComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponentComponent,
    FooterComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showLayout = true;

  constructor(private router: Router) {

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {

      const currentUrl = event.urlAfterRedirects;

      this.showLayout =
        currentUrl !== '/login' &&
        currentUrl !== '/register';

      console.log('Current URL:', currentUrl);
      console.log('Show Layout:', this.showLayout);
    });
}
}