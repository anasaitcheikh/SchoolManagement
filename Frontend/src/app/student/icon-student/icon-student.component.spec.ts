import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStudentComponent } from './icon-student.component';

describe('IconStudentComponent', () => {
  let component: IconStudentComponent;
  let fixture: ComponentFixture<IconStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
