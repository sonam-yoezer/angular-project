import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppontmentComponent } from './appointment.component';

describe('AppointmentComponent', () => {
  let component: AppontmentComponent;
  let fixture: ComponentFixture<AppontmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppontmentComponent]
    });
    fixture = TestBed.createComponent(AppontmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
