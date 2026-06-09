import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketComponentComponent } from './book-ticket-component.component';

describe('BookTicketComponentComponent', () => {
  let component: BookTicketComponentComponent;
  let fixture: ComponentFixture<BookTicketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTicketComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTicketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
