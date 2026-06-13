import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {

  constructor(
    private router: Router
  ) {}

  get currentUser() {
    return JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    );
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'Admin';
  }

 logout() {

  const confirmed = confirm(
    'Are you sure you want to logout?'
  );

  if (!confirmed) {
    return;
  }

  // Logout logic here

  localStorage.clear();

  this.router.navigate(['/login']);

}

}