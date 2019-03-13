import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordTeacherComponent } from './update-password-teacher.component';

describe('UpdatePasswordTeacherComponent', () => {
  let component: UpdatePasswordTeacherComponent;
  let fixture: ComponentFixture<UpdatePasswordTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
