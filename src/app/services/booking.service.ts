import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl =
    'http://localhost:3000/bookings';

  constructor(
    private http: HttpClient
  ) {}

  getBookingsByUser(userId: any) {

  const url =
    `${this.apiUrl}?userId=${userId}`;

  console.log(url);

  return this.http.get<any[]>(url);

}

  createBooking(
    booking: any
  ) {

    return this.http.post(
      this.apiUrl,
      booking
    );

  }
  getBookings() {

  return this.http.get<any[]>(
    this.apiUrl
  );

}
  updateBooking(
  id: number,
  booking: any
) {

  return this.http.put(
    `${this.apiUrl}/${id}`,
    booking
  );

}

getBookingById(
  id: number
) {

  return this.http.get<any>(
    `${this.apiUrl}/${id}`
  );

}
  getAllBookings() {

  return this.http.get<any[]>(
    this.apiUrl
  );

}
}