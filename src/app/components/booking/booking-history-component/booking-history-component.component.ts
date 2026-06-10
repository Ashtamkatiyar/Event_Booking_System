import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { EventService } from '../../../services/event.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-booking-history-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-history-component.component.html',
  styleUrl: './booking-history-component.component.css'
})
export class BookingHistoryComponent implements OnInit {

  bookings: any[] = [];
  constructor(
  private bookingService: BookingService,
  private eventService: EventService
) {}
  ngOnInit(): void {

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || '{}'
  );

  this.bookingService
    .getBookingsByUser(Number(currentUser.id))
    .subscribe(bookings => {

      const requests = bookings.map(booking =>
        this.eventService.getEventById(
          booking.eventId
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

        });

    });

}
  cancelBooking(
    booking: any
  ) {

    const updatedBooking = {

      ...booking,

      status: 'Cancelled'

    };

    this.bookingService
      .updateBooking(
        booking.id,
        updatedBooking
      )
      .subscribe({

        next: () => {

          this.eventService
            .getEventById(
              booking.eventId
            )
            .subscribe(event => {

              const updatedEvent = {

                ...event,

                availableSeats:
                  event.availableSeats +
                  booking.quantity

              };

              this.eventService
                .updateEvent(
                  event.id,
                  updatedEvent
                )
                .subscribe({

                  next: () => {

                    booking.status =
                      'Cancelled';

                    alert(
                      'Booking Cancelled'
                    );

                  }

                });

            });

        }

      });

  }
}