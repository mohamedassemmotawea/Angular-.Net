import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCallsComponent } from './phone-calls.component';

describe('PhoneCallsComponent', () => {
  let component: PhoneCallsComponent;
  let fixture: ComponentFixture<PhoneCallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneCallsComponent]
    });
    fixture = TestBed.createComponent(PhoneCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
