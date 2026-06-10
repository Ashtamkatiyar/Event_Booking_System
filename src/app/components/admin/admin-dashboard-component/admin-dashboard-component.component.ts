import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { EventService } from '../../../services/event.service';
import { BookingService } from '../../../services/booking.service';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard-component',
  standalone: true,
  templateUrl: './admin-dashboard-component.component.html',
  styleUrl: './admin-dashboard-component.component.css'
})
export class AdminDashboardComponent implements OnInit {

  totalUsers = 0;
  totalEvents = 0;
  totalBookings = 0;
  totalRevenue = 0;

  constructor(
  private userService: UserService,
  private eventService: EventService,
  private bookingService: BookingService
) {}

  ngOnInit(): void {

  forkJoin({

    users:
      this.userService.getUsers(),

    events:
      this.eventService.getEvents(),

    bookings:
      this.bookingService.getBookings()

  }).subscribe({

    next: (data) => {

      this.totalUsers =
        data.users.length;

      this.totalEvents =
        data.events.length;

      this.totalBookings =
        data.bookings.length;

      this.totalRevenue =
        data.bookings.reduce(

          (
            total,
            booking
          ) =>

            total +
            booking.totalAmount,

          0

        );

    }

  });

}
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