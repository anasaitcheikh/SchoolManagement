import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultStudentComponent } from './result-student.component';

describe('ResultStudentComponent', () => {
  let component: ResultStudentComponent;
  let fixture: ComponentFixture<ResultStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
