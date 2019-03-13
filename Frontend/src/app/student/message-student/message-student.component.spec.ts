import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStudentComponent } from './message-student.component';

describe('MessageStudentComponent', () => {
  let component: MessageStudentComponent;
  let fixture: ComponentFixture<MessageStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
