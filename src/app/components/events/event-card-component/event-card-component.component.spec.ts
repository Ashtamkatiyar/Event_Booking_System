/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventCardComponentComponent } from './event-card-component.component';

describe('EventCardComponentComponent', () => {
  let component: EventCardComponentComponent;
  let fixture: ComponentFixture<EventCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardComponentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EventCardComponentComponent);
    component = fixture.componentInstance;

    component.event = {
      id: '1',
      title: 'Music Show',
      description: 'Test Event',
      category: 'Music',
      imageUrl: 'test.jpg',
      availableSeats: 50,
      totalSeats: 100,
      status: 'Upcoming',
      venue: {
        name: 'Test Venue',
        address: 'Test Address',
        city: 'Delhi'
      },
      organizer: {
        name: 'Test Organizer',
        email: 'test@gmail.com'
      },
      schedule: {
        date: '2026-06-14',
        startTime: '10:00',
        endTime: '12:00'
      },
      ticketCategories: [
        {
          type: 'General',
          price: 500,
          totalSeats: 100,
          availableSeats: 50
        }
      ],
      createdAt: '2026-06-14'
    } as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});