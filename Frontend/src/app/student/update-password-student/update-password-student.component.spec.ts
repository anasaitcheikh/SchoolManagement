import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordStudentComponent } from './update-password-student.component';

describe('UpdatePasswordStudentComponent', () => {
  let component: UpdatePasswordStudentComponent;
  let fixture: ComponentFixture<UpdatePasswordStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
