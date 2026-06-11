import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';
import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

import {
  bookingQuantityValidator
} from '../../../validators/booking-quantity.validator';

import { NotificationService }
from '../../../services/notification.service';

@Component({
  selector: 'app-book-ticket-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './book-ticket-component.component.html',
  styleUrl: './book-ticket-component.component.css'
})
export class BookTicketComponent implements OnInit {

  event!: Event;
  quantityControl =
  new FormControl(1);

get quantity() {

  return this.quantityControl.value || 1;

}
  constructor(
  private route: ActivatedRoute,
  private eventService: EventService,
  private bookingService: BookingService,
  private notificationService: NotificationService
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
              
                this.notificationService
  .createNotification({

    id: Date.now().toString(),

    message:
      `New booking for ${this.event.title}`,

    type: 'Booking',

    createdAt:
      new Date().toISOString()

  })
  .subscribe();
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

  const id =
    this.route.snapshot.paramMap.get('id');

  this.eventService
    .getEventById(id!)
    this.eventService
  .getEventById(id!)
  .subscribe(data => {

    this.event = data;

    this.quantityControl =
      new FormControl(
        1,
        bookingQuantityValidator(
          this.event.availableSeats
        )
      );

  });

}

}