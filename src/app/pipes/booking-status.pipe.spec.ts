import { BookingStatusPipeTsPipe } from './booking-status.pipe.ts.pipe';

describe('BookingStatusPipeTsPipe', () => {
  it('create an instance', () => {
    const pipe = new BookingStatusPipeTsPipe();
    expect(pipe).toBeTruthy();
  });
});
