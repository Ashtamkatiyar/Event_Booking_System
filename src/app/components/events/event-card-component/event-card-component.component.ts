import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../models/event.model';
import { Router } from '@angular/router';
import {
  LowSeatWarningDirective
} from '../../../directives/low-seat-warning.directive';

@Component({
  selector: 'app-event-card-component',
  standalone: true,
  imports: [CommonModule, LowSeatWarningDirective],
  templateUrl: './event-card-component.component.html',
  styleUrl: './event-card-component.component.css'
})
export class EventCardComponentComponent {

  @Input()
  event!: Event;
  constructor(private router: Router) {}
  viewDetails(id: number): void {

  this.router.navigate([
    '/events',
    id
  ]);

}
bookTicket(id: number): void {

  this.router.navigate([
    '/book-ticket',
    id
  ]);

}

}