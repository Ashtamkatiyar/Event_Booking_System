import { Event } from './event.model';

export interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
}