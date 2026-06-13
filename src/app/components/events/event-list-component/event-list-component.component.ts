import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Event } from '../../../models/event.model';

import { EventCardComponentComponent }
from '../event-card-component/event-card-component.component';

import { SearchFilterComponentComponent }
from '../search-filter-component/search-filter-component.component';
import { OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-list-component',
  standalone: true,
  imports: [
    CommonModule,
    EventCardComponentComponent,
    SearchFilterComponentComponent,
    FormsModule       
  ],
  templateUrl: './event-list-component.component.html',
  styleUrl: './event-list-component.component.css'
})
export class EventListComponentComponent implements OnInit  {

  constructor(
  private eventService: EventService
){}
  ngOnInit(): void {

  this.eventService
    .getEvents()
    .subscribe(data => {

      this.events = data;
      this.filteredEvents = [...data];

    });

}

userName: string = '';

  events: Event[] = [];

  filteredEvents: Event[] = [];

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