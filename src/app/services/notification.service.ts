import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl =
    'http://localhost:3000/notifications';

  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get<any[]>(this.apiUrl);
  }
}