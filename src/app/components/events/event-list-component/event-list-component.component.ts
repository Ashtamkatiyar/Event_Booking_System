import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Event } from '../../../models/event.model';

import { EventCardComponentComponent }
from '../event-card-component/event-card-component.component';

import { SearchFilterComponentComponent }
from '../search-filter-component/search-filter-component.component';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  loadEvents
} from '../../../store/events/event.actions';

import {
  selectAllEvents
} from '../../../store/events/event.selectors';

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
export class EventListComponentComponent implements OnInit  {

  constructor(
  private store: Store
){}
  ngOnInit(): void {

  this.store.dispatch(
    loadEvents()
  );

  this.store
    .select(
      selectAllEvents
    )
    .subscribe(data => {

      this.events = data;

      this.filteredEvents =
        [...data];

    });

}

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