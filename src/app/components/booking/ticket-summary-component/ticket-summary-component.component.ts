import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-summary-component',
  standalone: true,
  templateUrl: './ticket-summary-component.component.html',
  styleUrl: './ticket-summary-component.component.css'
})
export class TicketSummaryComponent {

  booking = {
    bookingId: 1,
    eventName: 'Angular Developer Conference',
    attendeeName: 'Rahul Sharma',
    seatNumber: 'A-101',
    amount: 999,
    status: 'Confirmed'
  };

}