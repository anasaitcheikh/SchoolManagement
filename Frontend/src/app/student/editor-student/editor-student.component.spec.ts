import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorStudentComponent } from './editor-student.component';

describe('EditorStudentComponent', () => {
  let component: EditorStudentComponent;
  let fixture: ComponentFixture<EditorStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
