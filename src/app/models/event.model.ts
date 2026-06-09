export type EventCategory =
  | 'Music'
  | 'Technology'
  | 'Sports'
  | 'Education'
  | 'Business'
  | 'Entertainment';

export type EventStatus =
  | 'Upcoming'
  | 'Ongoing'
  | 'Completed'
  | 'Cancelled';

export interface Venue {
  name: string;
  address: string;
  city: string;
  state: string;
}

export interface Organizer {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
}

export interface EventSchedule {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface TicketCategory {
  id: number;
  name: string;
  price: number;
  quota: number;
  remainingTickets: number;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  category: EventCategory;
  venue: Venue;
  organizer: Organizer;
  schedule: EventSchedule;
  ticketCategories: TicketCategory[];
  totalSeats: number;
  availableSeats: number;
  status: EventStatus;
  createdAt: string;
}