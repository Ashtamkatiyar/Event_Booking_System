import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryComponentComponent } from './booking-history-component.component';

describe('BookingHistoryComponentComponent', () => {
  let component: BookingHistoryComponentComponent;
  let fixture: ComponentFixture<BookingHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingHistoryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
