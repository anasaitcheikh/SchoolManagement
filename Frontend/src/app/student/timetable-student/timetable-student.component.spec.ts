import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableStudentComponent } from './timetable-student.component';

describe('TimetableStudentComponent', () => {
  let component: TimetableStudentComponent;
  let fixture: ComponentFixture<TimetableStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
