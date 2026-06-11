import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { EventService } from '../../../services/event.service';
import { BookingService } from '../../../services/booking.service';

import { forkJoin } from 'rxjs';

import { NotificationService }
from '../../../services/notification.service';

@Component({
  selector: 'app-admin-dashboard-component',
  standalone: true,
  imports: [CommonModule],
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
  private bookingService: BookingService,
  private notificationService:
    NotificationService
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

  this.notificationService
    .getNotifications()
    .subscribe(data => {

      this.recentNotifications =

        data.sort(

          (a, b) =>

            new Date(
              b.createdAt
            ).getTime()

            -

            new Date(
              a.createdAt
            ).getTime()

        );

    });

}
  recentNotifications: any[] = [];

}