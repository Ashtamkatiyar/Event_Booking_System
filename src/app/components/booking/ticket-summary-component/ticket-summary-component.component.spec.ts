import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSummaryComponentComponent } from './ticket-summary-component.component';

describe('TicketSummaryComponentComponent', () => {
  let component: TicketSummaryComponentComponent;
  let fixture: ComponentFixture<TicketSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketSummaryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
