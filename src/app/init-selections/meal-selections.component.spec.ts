import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSelectionsComponent } from './meal-selections.component';

describe('MealSelectionsComponent', () => {
  let component: MealSelectionsComponent;
  let fixture: ComponentFixture<MealSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
