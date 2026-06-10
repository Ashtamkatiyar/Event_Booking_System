import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getEventById(id: string | number) {

  return this.http.get<any>(
    `${this.apiUrl}/${id}`
  );

}
  updateEvent(
  id: number,
  event: any
) {

  return this.http.put(
    `${this.apiUrl}/${id}`,
    event
  );

}
  deleteEvent(id: number) {

  return this.http.delete(
    `${this.apiUrl}/${id}`
  );

}

createEvent(event: any) {

  return this.http.post(
    this.apiUrl,
    event
  );

}

editEvent(
  id: number,
  event: any
) {

  return this.http.put(
    `${this.apiUrl}/${id}`,
    event
  );

}
}