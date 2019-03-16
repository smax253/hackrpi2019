import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickItineraryComponent } from './pick-itinerary.component';

describe('PickItineraryComponent', () => {
  let component: PickItineraryComponent;
  let fixture: ComponentFixture<PickItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
