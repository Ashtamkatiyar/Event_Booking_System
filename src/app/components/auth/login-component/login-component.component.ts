import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

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

    console.log('Login Successful');
    console.log(this.loginForm.value);

    alert('Login Successful');
  }
}