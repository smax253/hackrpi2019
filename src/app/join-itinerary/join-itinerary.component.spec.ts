import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinItineraryComponent } from './join-itinerary.component';

describe('JoinItineraryComponent', () => {
  let component: JoinItineraryComponent;
  let fixture: ComponentFixture<JoinItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
