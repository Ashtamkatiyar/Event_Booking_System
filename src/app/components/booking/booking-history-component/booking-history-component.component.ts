import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-history-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-history-component.component.html',
  styleUrl: './booking-history-component.component.css'
})
export class BookingHistoryComponent {

  bookings = [
    {
      id: 1,
      eventName: 'Angular Developer Conference',
      quantity: 2,
      amount: 1998,
      status: 'Confirmed'
    },
    {
      id: 2,
      eventName: 'Music Night 2026',
      quantity: 1,
      amount: 799,
      status: 'Confirmed'
    }
  ];

}
