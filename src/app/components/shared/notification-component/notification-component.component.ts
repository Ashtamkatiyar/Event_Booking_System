import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-component.component.html',
  styleUrl: './notification-component.component.css'
})
export class NotificationComponentComponent {

  @Input() message = '';

  @Input() type:
    'success'
    | 'error'
    | 'warning'
    = 'success';

}