import { Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login-component/login-component.component';
import { RegisterComponent } from './components/auth/register-component/register-component.component';

import { EventListComponentComponent } from './components/events/event-list-component/event-list-component.component';
import { EventDetailComponentComponent } from './components/events/event-detail-component/event-detail-component.component';

import { BookTicketComponent } from './components/booking/book-ticket-component/book-ticket-component.component';
import { BookingHistoryComponent } from './components/booking/booking-history-component/booking-history-component.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard-component/admin-dashboard-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'events', component: EventListComponentComponent },
  { path: 'events/:id', component: EventDetailComponentComponent },

  { path: 'book-ticket/:id', component: BookTicketComponent },
  { path: 'booking-history', component: BookingHistoryComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent }
];