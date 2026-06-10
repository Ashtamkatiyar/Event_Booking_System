import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-bookings-component',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './manage-bookings-component.component.html',
  styleUrl: './manage-bookings-component.component.css'
})
export class ManageBookingsComponent {

  bookings = [
    {
      id: 1,
      userId: 2,
      eventId: 1,
      quantity: 2,
      totalAmount: 1998,
      status: 'Confirmed'
    }
  ];

  cancelBooking(id:number){

    this.bookings =
      this.bookings.filter(
        booking => booking.id !== id
      );

  }

}