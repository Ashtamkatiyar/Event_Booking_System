/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ManageEventsComponentComponent } from './manage-events-component.component';

describe('ManageEventsComponent', () => {
  let component: ManageEventsComponentComponent;
  let fixture: ComponentFixture<ManageEventsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEventsComponentComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageEventsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});