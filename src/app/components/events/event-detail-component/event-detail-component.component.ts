import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-detail-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail-component.component.html',
  styleUrl: './event-detail-component.component.css'
})
export class EventDetailComponentComponent {

  @Input() event!: Event;

}