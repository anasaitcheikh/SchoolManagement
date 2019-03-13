import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtTeacherComponent } from './edt-teacher.component';

describe('EdtTeacherComponent', () => {
  let component: EdtTeacherComponent;
  let fixture: ComponentFixture<EdtTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
