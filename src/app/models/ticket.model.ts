export type TicketStatus =
  | 'Confirmed'
  | 'Cancelled'
  | 'Expired';

export interface Ticket {
  id: number;
  bookingId: number;
  eventId: number;
  ticketCategoryId: number;
  attendeeName: string;
  seatNumber?: string;
  status: TicketStatus;
}