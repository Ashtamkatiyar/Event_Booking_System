import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../services/booking.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-manage-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-bookings-component.component.html',
  styleUrl: './manage-bookings-component.component.css'
})
export class ManageBookingsComponent
implements OnInit {

  bookings: any[] = [];

  totalBookings = 0;

  confirmedBookings = 0;

  cancelledBookings = 0;

  totalRevenue = 0;

  constructor(
  private bookingService: BookingService,
  private eventService: EventService
) {}

  ngOnInit(): void {

    this.loadBookings();

  }

  loadBookings() {

  this.bookingService
    .getAllBookings()
    .subscribe(bookings => {

      if (!bookings.length) {

        this.bookings = [];
        return;

      }

      const requests = bookings.map(
        booking =>
          this.eventService
            .getEventById(booking.eventId)
            .pipe(
              catchError(() =>
                of({
                  title: 'Deleted Event'
                })
              )
            )
      );

      forkJoin(requests)
        .subscribe(events => {

          this.bookings =
            bookings.map((booking, index) => ({

              ...booking,

              eventName:
                events[index].title

            }));
            this.totalBookings =
  this.bookings.length;

this.confirmedBookings =
  this.bookings.filter(
    booking =>
      booking.status === 'Confirmed'
  ).length;

this.cancelledBookings =
  this.bookings.filter(
    booking =>
      booking.status === 'Cancelled'
  ).length;

this.totalRevenue =
  this.bookings
    .filter(
      booking =>
        booking.status === 'Confirmed'
    )
    .reduce(
      (sum, booking) =>
        sum + booking.totalAmount,
      0
    );

        });

    });

}

}