import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEdtTeacherComponent } from './edit-edt-teacher.component';

describe('EditEdtTeacherComponent', () => {
  let component: EditEdtTeacherComponent;
  let fixture: ComponentFixture<EditEdtTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEdtTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEdtTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
