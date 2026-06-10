import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-ticket-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-ticket-component.component.html',
  styleUrl: './book-ticket-component.component.css'
})
export class BookTicketComponent {

  selectedEvent = 'Angular Developer Conference';
  quantity = 1;

  bookTicket() {
    alert(
      `Successfully booked ${this.quantity} ticket(s) for ${this.selectedEvent}`
    );
  }

}