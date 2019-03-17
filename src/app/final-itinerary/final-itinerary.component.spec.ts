import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalItineraryComponent } from './final-itinerary.component';

describe('FinalItineraryComponent', () => {
  let component: FinalItineraryComponent;
  let fixture: ComponentFixture<FinalItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
