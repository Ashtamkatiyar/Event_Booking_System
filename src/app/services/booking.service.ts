import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) {}

  getBookings() {
    return this.http.get<any[]>(this.apiUrl);
  }
}