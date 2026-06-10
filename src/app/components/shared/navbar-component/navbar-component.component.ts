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

  currentUser = JSON.parse(
    localStorage.getItem('currentUser') || '{}'
  );

  get isAdmin(): boolean {
    return this.currentUser?.role === 'Admin';
  }

  constructor(
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}