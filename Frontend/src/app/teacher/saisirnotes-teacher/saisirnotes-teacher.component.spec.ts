import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirnotesTeacherComponent } from './saisirnotes-teacher.component';

describe('SaisirnotesTeacherComponent', () => {
  let component: SaisirnotesTeacherComponent;
  let fixture: ComponentFixture<SaisirnotesTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisirnotesTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirnotesTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
