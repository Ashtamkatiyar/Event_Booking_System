import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponentComponent } from './search-filter-component.component';

describe('SearchFilterComponentComponent', () => {
  let component: SearchFilterComponentComponent;
  let fixture: ComponentFixture<SearchFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFilterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
