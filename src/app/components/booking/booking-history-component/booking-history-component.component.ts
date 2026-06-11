import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { EventService } from '../../../services/event.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookingStatusPipe } from '../../../pipes/booking-status.pipe';
import { NotificationService }
from '../../../services/notification.service';

@Component({
  selector: 'app-booking-history-component',
  standalone: true,
  imports: [CommonModule, BookingStatusPipe],
  templateUrl: './booking-history-component.component.html',
  styleUrl: './booking-history-component.component.css'
})
export class BookingHistoryComponent implements OnInit {

  bookings: any[] = [];
  constructor(
  private bookingService: BookingService,
  private eventService: EventService,
  private notificationService: NotificationService
) {}
  ngOnInit(): void {

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || '{}'
  );

  this.bookingService
    .getBookingsByUser(Number(currentUser.id))
    .subscribe(bookings => {

      if (!bookings.length) {

        this.bookings = [];

        return;

      }

      const requests = bookings.map(booking =>
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

          this.bookings = bookings.map(
            (booking, index) => ({

              ...booking,

              eventName:
                events[index].title

            })
          );

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
                    this.notificationService
  .createNotification({

    id: Date.now().toString(),

    message:
      `Booking cancelled for ${booking.eventName}`,

    type: 'Cancellation',

    createdAt:
      new Date().toISOString()

  })
  .subscribe();
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