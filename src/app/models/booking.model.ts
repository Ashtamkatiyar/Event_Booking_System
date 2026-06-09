import { Ticket } from './ticket.model';

export type BookingStatus =
  | 'Confirmed'
  | 'Pending'
  | 'Cancelled'
  | 'Expired';

export interface Booking {
  id: number;
  userId: number;
  eventId: number;
  bookingDate: string;
  quantity: number;
  totalAmount: number;
  status: BookingStatus;
  tickets: Ticket[];
}