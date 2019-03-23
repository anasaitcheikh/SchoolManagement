import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStaffsComponent } from './all-staff.component';

describe('AllStaffComponent', () => {
  let component: AllStaffsComponent;
  let fixture: ComponentFixture<AllStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
