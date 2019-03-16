import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentTeacherComponent } from './list-student-teacher.component';

describe('ListStudentTeacherComponent', () => {
  let component: ListStudentTeacherComponent;
  let fixture: ComponentFixture<ListStudentTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
