import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function bookingQuantityValidator(
  maxSeats: number
): ValidatorFn {

  return (
    control: AbstractControl
  ): ValidationErrors | null => {

    if (
      control.value > maxSeats
    ) {

      return {
        seatsExceeded: true
      };

    }

    return null;

  };

}