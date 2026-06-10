import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-events-component',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './manage-events-component.component.html',
  styleUrl: './manage-events-component.component.css'
})
export class ManageEventsComponentComponent implements OnInit {

  events: any[] = [];
  newEvent = {

  title: '',

  description: '',

  category: '',

  venueName: '',

  venueAddress: '',

  city: '',

  price: 0,

  availableSeats: 0

};

  isEditing = false;

  editingEventId: number | null = null;

  constructor(
  private eventService: EventService
  ) {}

  ngOnInit(): void {

  this.loadEvents();

}
  loadEvents() {

  this.eventService
    .getEvents()
    .subscribe(data => {

      this.events = data;

    });

}

  deleteEvent(id: number) {

  if (
    !confirm(
      'Are you sure you want to delete this event?'
    )
  ) {
    return;
  }

  this.eventService
    .deleteEvent(id)
    .subscribe({

      next: () => {

        this.loadEvents();

        alert(
          'Event Deleted Successfully'
        );

      }

    });

}
  createEvent() {

  const event = {

    title: this.newEvent.title,

    description:
  this.newEvent.description,

    category: this.newEvent.category,

   venue: {

  name:
    this.newEvent.venueName,

  address:
    this.newEvent.venueAddress,

  city:
    this.newEvent.city,

  state: 'India'

},
    organizer: {

      id: 1,

      name: 'Admin',

      email: 'admin@gmail.com',

      contactNumber: '9999999999'

    },

    schedule: {

      startDate: new Date()
        .toISOString()
        .split('T')[0],

      endDate: new Date()
        .toISOString()
        .split('T')[0],

      startTime: '10:00',

      endTime: '18:00'

    },

    ticketCategories: [
      {
        id: 1,
        name: 'Regular',
        price:
  this.newEvent.price,
        quota: this.newEvent.availableSeats,
        remainingTickets:
          this.newEvent.availableSeats
      }
    ],

    totalSeats:
      this.newEvent.availableSeats,

    availableSeats:
      this.newEvent.availableSeats,

    status: 'Upcoming',

    createdAt:
      new Date().toISOString()

  };

  this.eventService
    .createEvent(event)
    .subscribe({

      next: () => {

        alert(
          'Event Added Successfully'
        );

        this.loadEvents();

        this.newEvent = {

  title: '',

  description: '',

  category: '',

  venueName: '',

  venueAddress: '',

  city: '',

  price: 0,

  availableSeats: 0

};

      }

    });

}
  editEvent(event: any) {

  this.isEditing = true;

  this.editingEventId = event.id;

  this.newEvent = {

    title: event.title,

    description: event.description,

    category: event.category,

    venueName: event.venue.name,

    venueAddress: event.venue.address,

    city: event.venue.city,

    price: event.ticketCategories[0].price,

    availableSeats: event.availableSeats

  };

}
  updateEvent() {

  if (!this.editingEventId) {
    return;
  }

  const oldEvent = this.events.find(
    e => e.id === this.editingEventId
  );

  const updatedEvent = {

    ...oldEvent,

    title: this.newEvent.title,

    description: this.newEvent.description,

    category: this.newEvent.category,

    totalSeats: this.newEvent.availableSeats,

    availableSeats: this.newEvent.availableSeats,

    venue: {

      ...oldEvent.venue,

      name: this.newEvent.venueName,

      address: this.newEvent.venueAddress,

      city: this.newEvent.city

    },

    ticketCategories: [

      {

        ...oldEvent.ticketCategories[0],

        price: this.newEvent.price,

        quota: this.newEvent.availableSeats,

        remainingTickets:
          this.newEvent.availableSeats

      }

    ]

  };

  this.eventService
    .editEvent(
      this.editingEventId,
      updatedEvent
    )
    .subscribe({

      next: () => {

        alert(
          'Event Updated Successfully'
        );

        this.loadEvents();

        this.isEditing = false;

        this.editingEventId = null;

        this.newEvent = {

          title: '',

          description: '',

          category: '',

          venueName: '',

          venueAddress: '',

          city: '',

          price: 0,

          availableSeats: 0

        };

      }

    });

}
}