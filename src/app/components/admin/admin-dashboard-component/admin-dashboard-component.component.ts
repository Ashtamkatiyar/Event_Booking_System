import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-component',
  standalone: true,
  templateUrl: './admin-dashboard-component.component.html',
  styleUrl: './admin-dashboard-component.component.css'
})
export class AdminDashboardComponent {

  totalUsers = 5;
  totalEvents = 2;
  totalBookings = 1;
  totalRevenue = 1998;

  recentNotifications = [
    {
      title: 'Booking Confirmed',
      message: 'Angular Developer Conference booking confirmed.'
    },
    {
      title: 'Low Seat Alert',
      message: 'VIP tickets are running low.'
    }
  ];

}