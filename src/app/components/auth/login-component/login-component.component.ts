import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router
) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {

  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
  }

  const email = this.loginForm.value.email!;
  const password = this.loginForm.value.password!;

  this.authService
    .login(email, password)
    .subscribe({

      next: (users) => {

        if (users.length > 0) {

          const user = users[0];

          localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
          );

          alert(`Welcome ${user.firstName}`);

          if (user.role === 'Admin') {

            this.router.navigate([
              '/admin-dashboard'
            ]);

          } else {

            this.router.navigate([
              '/events'
            ]);

          }

        } else {

          alert('Invalid Email or Password');

        }

      },

      error: () => {

        alert('Server Error');

      }

    });

}}