import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookingsComponentComponent } from './manage-bookings-component.component';

describe('ManageBookingsComponentComponent', () => {
  let component: ManageBookingsComponentComponent;
  let fixture: ComponentFixture<ManageBookingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBookingsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBookingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
