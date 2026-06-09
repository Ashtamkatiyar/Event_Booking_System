import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailComponentComponent } from './event-detail-component.component';

describe('EventDetailComponentComponent', () => {
  let component: EventDetailComponentComponent;
  let fixture: ComponentFixture<EventDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
