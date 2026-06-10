import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-detail-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-detail-component.component.html',
  styleUrl: './event-detail-component.component.css'
})
export class EventDetailComponentComponent implements OnInit {

  event!: Event;
  constructor(
  private route: ActivatedRoute,
  private eventService: EventService
){}

ngOnInit(): void {

  const id =
    this.route.snapshot.paramMap.get('id');

  this.eventService
    .getEventById(id!)
    .subscribe(data => {

      this.event = data;

    });

}

}