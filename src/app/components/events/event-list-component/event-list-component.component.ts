import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Event } from '../../../models/event.model';

import { EventCardComponentComponent }
from '../event-card-component/event-card-component.component';

import { SearchFilterComponentComponent }
from '../search-filter-component/search-filter-component.component';

@Component({
  selector: 'app-event-list-component',
  standalone: true,
  imports: [
    CommonModule,
    EventCardComponentComponent,
    SearchFilterComponentComponent
  ],
  templateUrl: './event-list-component.component.html',
  styleUrl: './event-list-component.component.css'
})
export class EventListComponentComponent {

  events: Event[] = [
    {
      id: 1,
      title: 'Music Concert',
      description: 'Live Music Concert',
      category: 'Music',

      venue: {
        name: 'Indira Gandhi Stadium',
        address: 'Delhi',
        city: 'Delhi',
        state: 'Delhi'
      },

      organizer: {
        id: 1,
        name: 'ABC Events',
        email: 'abc@gmail.com',
        contactNumber: '9876543210'
      },

      schedule: {
        startDate: '2026-06-20',
        endDate: '2026-06-20',
        startTime: '06:00 PM',
        endTime: '10:00 PM'
      },

      ticketCategories: [],

      totalSeats: 1000,
      availableSeats: 800,

      status: 'Upcoming',

      createdAt: '2026-06-01'
    },

    {
      id: 2,
      title: 'Tech Conference',
      description: 'Angular and AI Conference',
      category: 'Technology',

      venue: {
        name: 'Bangalore Convention Center',
        address: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka'
      },

      organizer: {
        id: 2,
        name: 'Tech Events',
        email: 'tech@gmail.com',
        contactNumber: '9999999999'
      },

      schedule: {
        startDate: '2026-07-10',
        endDate: '2026-07-10',
        startTime: '09:00 AM',
        endTime: '05:00 PM'
      },

      ticketCategories: [],

      totalSeats: 500,
      availableSeats: 350,

      status: 'Upcoming',

      createdAt: '2026-06-02'
    }
  ];

  filteredEvents: Event[] = [...this.events];

  applyFilters(filter: {
    searchText: string;
    category: string;
  }) {

    this.filteredEvents = this.events.filter(event => {

      const matchesSearch =
        event.title
          .toLowerCase()
          .includes(filter.searchText.toLowerCase());

      const matchesCategory =
        filter.category === '' ||
        event.category === filter.category;

      return matchesSearch && matchesCategory;
    });
  }
}