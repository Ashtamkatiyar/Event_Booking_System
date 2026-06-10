import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-events-component',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './manage-events-component.component.html',
  styleUrl: './manage-events-component.component.css'
})
export class ManageEventsComponent {

  events = [
    {
      id: 1,
      title: 'Angular Developer Conference',
      category: 'Technology',
      city: 'Greater Noida',
      availableSeats: 185,
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Music Night 2026',
      category: 'Music',
      city: 'Noida',
      availableSeats: 420,
      status: 'Upcoming'
    }
  ];

  deleteEvent(id:number){
    this.events = this.events.filter(
      event => event.id !== id
    );
  }

}