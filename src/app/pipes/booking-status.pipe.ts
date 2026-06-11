import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingStatus',
  standalone: true
})
export class BookingStatusPipe
implements PipeTransform {

  transform(
    value: string
  ): string {

    switch(value){

      case 'Confirmed':
        return 'Confirmed ✓';

      case 'Cancelled':
        return 'Cancelled ✕';

      default:
        return value;

    }

  }

}