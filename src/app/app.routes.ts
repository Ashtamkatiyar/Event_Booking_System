import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login-component/login-component.component';
import { RegisterComponent } from './components/auth/register-component/register-component.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];