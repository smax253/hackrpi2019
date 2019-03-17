import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitSelectionsComponent } from './init-selections.component';

describe('InitSelectionsComponent', () => {
  let component: InitSelectionsComponent;
  let fixture: ComponentFixture<InitSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
