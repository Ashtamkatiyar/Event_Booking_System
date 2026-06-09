import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventsComponentComponent } from './manage-events-component.component';

describe('ManageEventsComponentComponent', () => {
  let component: ManageEventsComponentComponent;
  let fixture: ComponentFixture<ManageEventsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEventsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEventsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
