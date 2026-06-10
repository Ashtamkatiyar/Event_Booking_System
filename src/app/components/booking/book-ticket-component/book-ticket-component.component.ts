import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';

@Component({
  selector: 'app-book-ticket-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-ticket-component.component.html',
  styleUrl: './book-ticket-component.component.css'
})
export class BookTicketComponent implements OnInit {

  event!: Event;
  quantity = 1;

  constructor(
  private route: ActivatedRoute,
  private eventService: EventService,
  private bookingService: BookingService
){}

 bookTicket() {

  if (
    this.quantity >
    this.event.availableSeats
  ) {

    alert(
      'Not enough seats available'
    );

    return;

  }

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || '{}'
  );

  const booking: Booking = {

    id: Date.now(),

    userId: Number(currentUser.id),

    eventId: this.event.id,

    bookingDate: new Date().toISOString(),

    quantity: this.quantity,

    totalAmount:
      this.quantity *
      this.event.ticketCategories[0].price,

    status: 'Confirmed',

    tickets: []

  };

  this.bookingService
    .createBooking(booking)
    .subscribe({

      next: () => {

        const updatedEvent = {

          ...this.event,

          availableSeats:
            this.event.availableSeats -
            this.quantity

        };

        this.eventService
          .updateEvent(
            this.event.id,
            updatedEvent
          )
          .subscribe({

            next: () => {

              this.event.availableSeats =
                updatedEvent.availableSeats;

              alert(
                'Booking Successful'
              );

            },

            error: () => {

              alert(
                'Booking saved but seat update failed'
              );

            }

          });

      },

      error: () => {

        alert(
          'Booking Failed'
        );

      }

    });

}
  ngOnInit(): void {

  const id = Number(
    this.route.snapshot.paramMap.get('id')
  );

  this.eventService
    .getEventById(id)
    .subscribe(data => {

      this.event = data;

    });

}


}