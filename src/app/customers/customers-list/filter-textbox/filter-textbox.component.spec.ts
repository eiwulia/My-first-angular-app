import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTextboxComponent } from './filter-textbox.component';

describe('FilterTextboxComponent', () => {
  let component: FilterTextboxComponent;
  let fixture: ComponentFixture<FilterTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
