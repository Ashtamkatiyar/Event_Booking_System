import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card-component.component.html',
  styleUrl: './event-card-component.component.css'
})
export class EventCardComponentComponent {

  @Input()
  event!: Event;

}